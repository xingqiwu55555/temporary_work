
/**
 *
 *  fake payment invoke method
 *
 *
 *  data : { isSuccess: 1/0, orderNo : '订单号', amount: '支付金额',  extra: 'order/charge' }
 *
 *  extra : 代表支付类型， 如果是订单购物请填写  order, 如果是充值支付请填写 charge
 *
 * @param openId
 *
 */
function fkPay(data) {
    var isSuccess = data.isSuccess;
    if(is_valid_str(data.orderNo)){
        var fkPayUrl = payServerUrlBase+'/pay/fakepay/pay.php';
        $('#postWxPay').remove();
        $('<form id="postFkPay" method="post" style="display: none;"> \
                    <input type="hidden" name="totalFee" value="1" id="totalFee" /> \
                    <input type="hidden" name="orderNo" id="orderNo" /> \
                    <input type="hidden" name="isSuccess" id="isSuccess" /> \
                    <input type="hidden" name="frontURL" id="wxFrontURL" /> \
                    <input type="hidden" name="productDesc" id="productDesc" /> \
                    <input type="hidden" name="extra" id="extra" /> \
                    </form>').appendTo($('body'));
        var $form = $('#postFkPay');
        $form.attr('action', fkPayUrl);
        $form.find('#totalFee').val(data.amount);
        $form.find('#orderNo').val(data.orderNo);
        $form.find('#isSuccess').val(isSuccess);
        $form.find('#extra').val(data.extra);
        $form.find('#productDesc').val('会员充值');
        $form.find('#wxFrontURL').val(frontUrlBase+'/fk_pay_result.html');
        $form.submit();
    }else{
        return errrTips('订单数据错误');
    }
}