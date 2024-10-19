<template>
    <base-card v-if="!flag">
        <h2>Login</h2>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="Enter Pnone No..." v-model="phoneNo" @keypress="handleOnlyNumber">
            <base-button mode="flat" type="submit"><span class="btn-text">Submit</span></base-button>
        </form>
        {{ phoneNumber }}
    </base-card>
    <base-card v-if="flag">
        <h2>Enter the OTP Sent To {{ phoneNo }}</h2>
        <div>
            <div class="otp-input-wraper">
                <input type="text" v-for="(digit,index) in otpArray" :key="index" ref="otpRefs" 
                class="otp-option" :class="{'input-focus':focusedIndex==index}"
                v-model="otpArray[index]" @input="handleInput(index)" @keydown="handleBackspace($event,index)" 
                maxlength="1" @keypress="handleOnlyNumber" @focus="handleFocus(index)" @blur="handleBlur"
                 >
            </div>
            <div>
                <base-button @click="checkOtp"><span>Verify OTP</span></base-button>
            </div>
        </div>
    </base-card>
</template>
<script>
import{  nextTick, reactive, ref } from 'vue';
export default{
    setup(){
            var flag = ref(false);
            const phoneNo=ref('');
            const otpLength = 4;
            const otpArray = reactive(Array(otpLength).fill(''));
            const otpRefs=ref([]);
            const focusedIndex = ref(-1)
            const handleOnlyNumber=(event)=>{
    const key=event.key;
    if(!/^\d+$/.test(key) && key!=='Backspace' && key!=='Delete' && key!=='ArrowLeft'&& key!=='ArrowRight'){
       event.preventDefault();
    }
            }
            const submitData=function(){
        if(phoneNo.value.length!=10){
            flag.value = false;
            alert('Please enetr 10 digits!');
        }else{
            flag.value = true;
            nextTick(()=>{
                if (otpRefs.value && otpRefs.value[0]) {
                    otpRefs.value[0]?.focus();
                }
            })
      }
            };
            const handleInput=(index)=>{
                if(index < otpRefs.value.length && otpArray[index].length==1 && index < otpArray.length-1){
                    otpRefs.value[index+1]?.focus();
                }
            };
            const handleBackspace = (event,index)=>{
                if(event.key==='Backspace'){
                    if(index > 0){
                    otpRefs.value[index - 1]?.focus();
                    event.preventDefault();
                    otpArray[index]='';
                }
                }
            }
             const handleFocus=(index)=>{
                focusedIndex.value = index;
            }
            const handleBlur=()=>{
                focusedIndex.value = -1;
            }
            const checkOtp=()=>{
                if(otpArray.every((value)=> value.length===1)){
                    alert('OTP Submitted SuccessFully!'); 
                }else{
                    alert('Please enter all the fields.');
            }
        }
    return{
    flag,phoneNo,otpLength,otpArray,otpRefs,submitData,
    handleInput,handleBackspace,checkOtp,handleOnlyNumber,focusedIndex,handleFocus,handleBlur
    }
    }
}

</script>
<style scoped>
input{
    font-size: 20px;
    padding: 8px;
    margin-right: 8px;
}
.btn-text{
    font-size: 20px;
}
form{
    margin-bottom: 25px;
}
.otp-option{
    font-size: 30px;
    padding: 10px;
    margin-right: 15px;
    width: 50px;
    height: 60px;
    text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
/* box-shadow: 0px 0px 10px 1px rgba(76,175,80,1); */

}
.otp-input-wraper{
    margin-bottom: 25px;
}
.input-focus{
    outline:none;
    border:1px solid #4caf50;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(76,175,80,1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(76,175,80,1);
        box-shadow: 0px 0px 5px 1px rgba(76,175,80,1);
}
</style>