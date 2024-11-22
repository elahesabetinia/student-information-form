document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // جلوگیری از رفتار پیش‌فرض فرم
  
    // گرفتن اطلاعات فرم
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const nationalId = document.getElementById("nationalId").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const photo = document.getElementById("photo").files[0];
  
    if (!firstName || !lastName || !nationalId || !age || !gender || !photo) {
      alert("Please fill out all fields!");
      return;
    }
  
    // نمایش اطلاعات
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <h2>Student Information</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>National ID:</strong> ${nationalId}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Photo:</strong></p>
      <img src="${URL.createObjectURL(photo)}" alt="Student Photo" style="max-width: 100%; border-radius: 8px;">
    `;
  
    // پیام موفقیت و بازگشت به صفحه اصلی
    setTimeout(() => {
      alert("Form submitted successfully!");
      window.location.href = "user.html"; // بازگشت به صفحه اصلی
    }, 2000); // تاخیر 2 ثانیه برای نمایش اطلاعات
  });
  