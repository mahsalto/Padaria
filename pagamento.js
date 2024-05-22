document.addEventListener("DOMContentLoaded", function() {
  const paymentMethodSelect = document.getElementById("payment-method");
  const paymentInfos = document.querySelectorAll(".payment-info");

  paymentMethodSelect.addEventListener("change", function() {
    const selectedMethod = paymentMethodSelect.value;


    paymentInfos.forEach(function(paymentInfo) {
      paymentInfo.classList.remove("active");
    });

   
    const selectedPaymentInfo = document.getElementById(`${selectedMethod}-info`);
    if (selectedPaymentInfo) {
      selectedPaymentInfo.classList.add("active");
    }
  });

  const paymentForm = document.getElementById("payment-form");
  paymentForm.addEventListener("submit", function(event) {
 
    const selectedMethod = paymentMethodSelect.value;
    if (selectedMethod === "boleto") {
      processBoletoPayment();
    } else if (selectedMethod === "cartao") {
      processCreditCardPayment();
    } else if (selectedMethod === "pix") {
      processPixPayment();
    }
  });

  function processBoletoPayment() {
    
    alert("Seu boleto foi gerado. Verifique seu e-mail.");
    return true; 
  }

  function processCreditCardPayment() {

    alert("Seu pagamento com cartão de crédito foi processado com sucesso.");
    return true; 
  }

  function processPixPayment() {

    alert("Use o QR code para realizar o pagamento via Pix.");
    return true; 
  }
});
