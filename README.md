# Portfolio Cá Nhân Hiện Đại (React + TypeScript + Tailwind CSS)

Website portfolio cá nhân cao cấp, hiện đại, tối ưu SEO, hỗ trợ Responsive toàn diện (Mobile, Tablet, Desktop) và Dark/Light mode tự động lưu cấu hình.

---

## 🚀 Tính năng nổi bật

- ⚡ **Siêu tốc & Hiện đại**: Sử dụng Vite + React 18 + TypeScript + Tailwind CSS v4.
- 🌓 **Dark / Light Mode mượt mà**: Tự động nhận diện theme hệ điều hành và lưu trạng thái vào `localStorage`.
- ⌨️ **Hiệu ứng Typewriter**: Hiển thị luân phiên các vị trí công việc sinh động.
- 📱 **Responsive 100%**: Giao diện hiển thị chuẩn xác trên mọi kích thước màn hình với mobile drawer menu.
- 📂 **Tách biệt dữ liệu (Config-Driven)**: Toàn bộ thông tin cá nhân, kỹ năng, dự án, kinh nghiệm đều nằm gọn trong file `src/data/portfolioData.ts`, giúp bạn thay đổi thông tin chỉ trong vài phút.
- 🎯 **Phân loại dự án & Modal chi tiết**: Bộ lọc dự án theo chuyên mục và pop-up xem nhanh thông số, kết quả đạt được.
- 📬 **Form liên hệ tương tác**: Hỗ trợ xác thực đầu vào và thông báo trạng thái gửi tin nhắn trực quan.

---

## 🛠️ Hướng dẫn cài đặt & Chạy dự án

### 1. Khởi chạy môi trường phát triển (Dev)
```bash
npm run dev
```
Mở trình duyệt tại đường dẫn hiển thị trên terminal (thường là `http://localhost:5173`).

### 2. Đóng gói cho môi trường thực tế (Production Build)
```bash
npm run build
```
Mã nguồn tối ưu sau khi build sẽ nằm trong thư mục `dist/`.

### 3. Xem trước bản đóng gói (Preview)
```bash
npm run preview
```

---

## 📝 Hướng dẫn tùy biến thông tin cá nhân

Bạn chỉ cần mở file:
👉 **[`src/data/portfolioData.ts`](file:///e:/Duc%20k%C4%A9%20thu%E1%BA%ADt/Profio/src/data/portfolioData.ts)**

Tại đây bạn có thể thay đổi:
- **`personalInfo`**: Họ tên, chức danh, mô tả ngắn, email, số điện thoại, link mạng xã hội (GitHub, LinkedIn...), link tải CV.
- **`about`**: Câu chuyện lập trình, triết lý làm việc và các giá trị cốt lõi.
- **`skillCategories`**: Thêm/bớt các công nghệ (Frontend, Backend, DevOps, Tools) cùng tỷ lệ thành thạo (0 - 100%).
- **`projects`**: Danh sách dự án (tiêu đề, ảnh minh họa, link demo, link github, công nghệ sử dụng, điểm nổi bật).
- **`experiences`**: Lịch sử làm việc, công ty, thời gian và các thành tựu.
- **`education`**: Học vấn, trường học, chuyên ngành.
- **`testimonials`**: Đánh giá từ đồng nghiệp hoặc khách hàng.

---

## 🌐 Hướng dẫn đưa website lên Internet (Miễn phí)

### Cách 1: Đưa lên Vercel (Khuyên dùng - Nhanh nhất)
1. Đẩy mã nguồn lên GitHub.
2. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
3. Chọn **Add New Project** -> Chọn repository này -> Nhấn **Deploy**.
4. Website sẽ có địa chỉ trực tuyến miễn phí dạng `ten-cua-ban.vercel.app` với HTTPS tự động.

### Cách 2: Đưa lên Netlify
1. Truy cập [netlify.com](https://www.netlify.com).
2. Kéo thả thư mục `dist` sau khi chạy lệnh `npm run build` vào Netlify Drop.
