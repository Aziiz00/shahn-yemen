// قبل النشر: ضع رقم واتساب خدمة العملاء بصيغة دولية من دون + أو مسافات.
// مثال توضيحي فقط: 9677XXXXXXXX — استبدله برقمك الحقيقي.
const WHATSAPP_NUMBER = "9677XXXXXXXX";
const form = document.getElementById("orderForm");
document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const network = document.getElementById("network").value;
  const service = document.getElementById("service").value;
  const phone = document.getElementById("phone").value.trim();
  const amount = document.getElementById("amount").value;
  const notes = document.getElementById("notes").value.trim();

  if (!network || !phone || !amount || Number(amount) < 1) {
    document.getElementById("feedback").textContent = "يرجى إكمال الحقول المطلوبة.";
    return;
  }
  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("feedback").textContent =
      "الواجهة تعمل، لكن يجب استبدال رقم واتساب التجريبي برقم خدمة العملاء الحقيقي داخل ملف app.js قبل استقبال الطلبات.";
    return;
  }
  const message = [
    "طلب جديد من تطبيق شحن اليمن",
    "الشبكة: " + network,
    "الخدمة: " + service,
    "رقم الهاتف: " + phone,
    "المبلغ: " + amount + " ريال يمني",
    notes ? "ملاحظات: " + notes : ""
  ].filter(Boolean).join("\\n");
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message), "_blank", "noopener");
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}