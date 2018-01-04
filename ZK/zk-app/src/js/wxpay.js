/**
 *
 * data : { orderNo : '订单号', amount: '支付金额',  extra: 'order/charge' }
 *
 * extra : 代表支付类型， 如果是订单购物请填写  order, 如果是充值支付请填写 charge
 *
 * @param data
 */
function ajaxInvokeWxPay(data) {
    var wxpayURL = payServerUrlBase + '/pay/wxpay/example/jsapi.php';
    $('#postWxPay').remove();
    $('<form id="postWxPay" method="post" style="display: none;"> \
                    <input type="hidden" name="ws" value="1" /> \
                    <input type="hidden" name="totalFee" value="1" id="totalFee" /> \
                    <input type="hidden" name="orderNo" id="orderNo" /> \
                    <input type="hidden" name="extra" id="extra" /> \
                    <input type="hidden" name="frontURL" id="wxFrontURL" /> \
                    <input type="hidden" name="productDesc" id="productDesc" /> \
                    </form>').appendTo($('body'));
    var $form = $('#postWxPay');
    $form.attr('action', wxpayURL);
    $form.find('#totalFee').val(data.amount);
    $form.find('#orderNo').val(data.orderNo);
    $form.find('#extra').val(data.extra);
    $form.find('#productDesc').val('商品购买费用');
    $form.find('#wxFrontURL').val(frontUrlBase + '/wx_pay_result.html');
    $form.submit();
}
