<template>
<v-row>
    <v-col>
        <div data-v-51c8d198="" class="col-12"><fieldset data-v-51c8d198="" class="form-group" id="__BVID__349">
            <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0" id="__BVID__349__BV_label_">이메일</legend>
        <div>
            <input data-v-51c8d198="" name="email" type="email" placeholder="example@soomgo.com" autocomplete="off" class="text-input form-control is-invalid invalid" data-testid="login-email" x-autocompletetype="off" autocorrect="off" spellcheck="false" autocapitalize="off" data-vv-validate-on="blur" aria-invalid="true" id="__BVID__350" aria-required="true">
            <div data-v-51c8d198="" class="invalid-feedback">이메일 주소를 입력해주세요.</div><!----><!----><!----></div></fieldset></div>
    </v-col>
</v-row>
 
                     
</template>

<script>

export default {
    
    setup () {
        return {}
    }
}
</script>

<style scoped>

.form-row>.col, .form-row>[class*=col-], .modal .modal-footer .form-row>.btn {
    padding-right: 0.3125rem;
    padding-left: 0.3125rem;
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

.login-form .text-input[data-v-51c8d198] {
    padding: 0.75rem;
    border-radius: 4px;
}
.form-control.is-invalid, input.form-control.is-valid, textarea.form-control.is-valid {
    background-image: none;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.5rem);
    padding: 0.6875rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    background-color: #fff;
    background-clip: padding-box;
    border: 0.0625rem solid #e1e1e1;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button, input {
    overflow: visible;
}

input {
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}




</style>