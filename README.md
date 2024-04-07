 # USECALLBACK 

UseCallback() Là một react hooks giúp mình tạo ra một memoized callback và chỉ tạo ra callback mới khi dependencies thay đổi.React useCallbackHook trả về hàm gọi lại được ghi nhớ.Hãy coi việc ghi nhớ như việc lưu vào bộ nhớ đệm một giá trị để không cần phải tính toán lại. Điều này của useCallBack cho phép nó tách biệt các chức năng sử dụng nhiều tài nguyên để chúng không tự động chạy trên mỗi lần kết xuất. Hook useCallbackchỉ chạy khi một trong các phần phụ thuộc của nó được cập nhật. Điều này có thể cải thiện hiệu suất. useCallback và useMemoHooks tương tự nhau. Sự khác biệt chính là  useMemo trả về một giá trị được ghi nhớ và useCallbacktrả về một hàm được ghi nhớ . Một lý do nên sử dụng useCallbacklà để ngăn một thành phần hiển thị lại trừ khi đạo cụ của nó đã thay đổi. 



[sơ đồ tư duy](https://drive.google.com/drive/folders/10ciPEfSTcQxYLun9xZqZFDCPx6ydy-ms?usp=sharing)
