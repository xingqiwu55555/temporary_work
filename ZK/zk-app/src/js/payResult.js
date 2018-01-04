/**
 * Created by LingFeng on 2017/10/11.
 */

let wxResult = getQueryString("fkResult");
let orderNo = getQueryString('orderNo');
let extra = getQueryString('extra');
let html = '';


if(extra == 'charge'){
  if(wxResult == 1){
    html = `<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
            <div class="weui_text_area">
                <h2 class="weui_msg_title">支付成功</h2>
            </div>
            <div class="weui_opr_area">
                <p class="weui_btn_area">
                    <a href="member/wallet.html" class="weui_btn weui_btn_primary">我的钱包</a>
                </p>
            </div>`;
    $('.weui_msg').empty().append(html);
  }else{
    html = `
                <div class="weui_icon_area"><i class="weui_icon_warn weui_icon_msg"></i></div>
            <div class="weui_text_area">
                <h2 class="weui_msg_title">支付失败</h2>
            </div>
            <div class="weui_opr_area">
                <p class="weui_btn_area">
                    <a href="member/wallet.html" class="weui_btn weui_btn_primary">去查看</a>
                </p>
            </div>`;
    $('.weui_msg').empty().append(html);
  }
}
if(extra == 'order'){
  if(wxResult == 1){
    html = `<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
            <div class="weui_text_area">
                <h2 class="weui_msg_title">支付成功</h2>
            </div>
            <div class="weui_opr_area">
                <p class="weui_btn_area">
                    <a href="member/wallet.html" class="weui_btn weui_btn_primary">我的钱包</a>
                </p>
            </div>`;
    $('.weui_msg').empty().append(html);
  }else{
    html = `
                <div class="weui_icon_area"><i class="weui_icon_warn weui_icon_msg"></i></div>
            <div class="weui_text_area">
                <h2 class="weui_msg_title">支付失败</h2>
            </div>
            <div class="weui_opr_area">
                <p class="weui_btn_area">
                    <a href="member/wallet.html" class="weui_btn weui_btn_primary">去查看</a>
                </p>
            </div>`;
    $('.weui_msg').empty().append(html);
  }
}

