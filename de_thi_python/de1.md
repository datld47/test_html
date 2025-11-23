<p style="margin:0.25px;text-align:center; font-weight:bold;">TRƯỜNG ĐẠI HỌC ĐÔNG Á</p>
<p style="margin:0.25px;text-align:center; font-weight:bold;">KHOA ĐIỆN - ĐIỆN TỬ</p>
<hr>
<p style="margin:0.25px;text-align:center; font-weight:bold;">ĐỀ KIỂM TRA GIỮA KỲ</p>
<p style="margin:0.25px;text-align:center; font-weight:bold;">Mã đề :01</p>
<p style="margin:0.25px;text-align:center; font-weight:bold;">Môn thi: Lập trình python</p>
<p style="margin:0.25px;text-align:center; font-weight:bold;">Thời gian làm bài : 120 phút</p>
<p style="margin:0.25px;text-align:center; font-weight:bold;">HÌnh thức: Trắc nghiệm và tự luận</p> 
<p style="margin:0.25px;text-align:center;">(Sinh viên được phép dùng tài liệu)</p>
<hr>


# Phần 1: Trắc nghiệm (4 điểm)
1.  Trong Python, để khai báo một hàm, ta sử dụng từ khóa nào?      
a) `function`    
b) `def`     
c) `func`    
d) `method`

2.  Kiểu dữ liệu nào được sử dụng để lưu trữ dữ liệu dưới dạng cặp Key-Value (Khóa-Giá trị)?    
a) List     
b) Tuple   
c) Dictionary  
d) String
3.  Trong Python, phương thức nào của module `random` được dùng để chọn ngẫu nhiên một phần tử (item) trong danh sách?  
a) `random.randint(a, b)`  
b) `random.uniform(a, b)`  
c) `random.choice(list)`     
d) `random.shuffle(list)`
4.  Câu lệnh nào sau đây dùng để **thêm** một module vào ứng dụng Python?   
a) `import module_name`     
b) `include module_name`     
c) `use module_name`    
d)`load module_name`

5.  Sự khác biệt cơ bản giữa `list.pop(i)` và `list.clear()` là gì?     
a) `pop(i)` xóa phần tử và trả về giá trị của nó; `clear()` xóa tất cả phần tử và trả về `None`.    
b) Cả hai đều xóa tất cả phần tử trong danh sách.   
c) `pop(i)` xóa phần tử ở vị trí `i`; `clear()` xóa phần tử cuối cùng.  
d) `pop(i)` trả về giá trị, `clear()` không làm gì cả.  

6.  Kết quả của biểu thức Python sau là gì: `5 % 3`?    
a) 1    
b) 2    
c) 1.666    
d) 0    
7.  Trong cấu trúc câu điều kiện `if/elif/else`, khi nào khối lệnh trong `else` được thực thi?      
a) Khi điều kiện trong `if` là `True`.  
b) Khi một trong các điều kiện `elif` là `True`.   
c) Khi **tất cả** các điều kiện `if` và `elif` đều là `False`.    
d) Luôn luôn được thực thi.
8.  Mục đích chính của việc sử dụng **f-string** là gì?     
a) Để định dạng chuỗi với các ký tự in hoa.     
b) Để thực hiện các phép toán phức tạp.     
c) Để tạo chuỗi ký tự có định dạng phức tạp bằng cách nhúng biến vào trong chuỗi.   
d) Để chuyển đổi kiểu dữ liệu.

9.  Để truy cập giá trị của Key `"baudrate"` trong dictionary lồng nhau `config_data['serial']`, cú pháp nào là chính xác?      
a) `config_data('serial')['baudrate']`  
b) `config_data['serial'].baudrate`     
c) `config_data['serial']['baudrate']`   
d) `config_data.get('serial', 'baudrate')`
10.  Cho đoạn code: `x = 10; x += 5; print(x)`. Kết quả in ra là bao nhiêu?     
a) 5    
b) 10   
c) 15   
d) Lỗi cú pháp
11.  Phương thức nào của List dùng để thêm phần tử vào **cuối** danh sách?  
a) `list.insert(0, item)`   
b) `list.extend(item)`  
c) `list.append(item)`  
d) `list.pop()`
12.  Câu lệnh `for number in range(1, 6, 2): print(number)` sẽ in ra những số nào?  
a) 1, 2, 3, 4, 5    
b) 1, 3, 5   
c) 2, 4     
d) 1, 6 

13.  Cho hai biến `a = 5` và `b = 10`. Câu lệnh nào sau đây sẽ trả về `True`?   
a) `a > b`  
b) `a == b`     
c) `a != b and b > 9`    
d) `a <= 4` 

14.  Trong Python, nếu bạn muốn **thoát ngay lập tức** khỏi một vòng lặp `for` khi gặp một điều kiện nhất định, bạn sử dụng từ khóa nào?    
a) `continue`   
b) `pass`   
c) `exit`   
d) `break`  
15.  Tại sao khi cập nhật giá trị trong Dictionary, ta nên dùng phương thức `get()` thay vì dấu ngoặc vuông `[]` khi không chắc chắn Key có tồn tại hay không?  
a) `get()` nhanh hơn.   
b) `get()` cho phép ta thêm Key mới nếu nó không tồn tại.   
c) Dấu ngoặc vuông `[]` sẽ gây ra lỗi `KeyError` và làm treo chương trình nếu Key không tồn tại, trong khi `get()` sẽ trả về `None` hoặc giá trị mặc định.  
d) `get()` chỉ dùng cho Dictionary lồng nhau.   

16.  Mục đích của việc sử dụng `super().__init_(...)` trong Lớp Con khi kế thừa là gì?  
a) Để ghi đè phương thức `__init__` của Lớp Cha.    
b) Để gọi đến phương thức `__init__` của Lớp Cha, giúp khởi tạo các thuộc tính chung đã được định nghĩa ở Lớp Cha.   
c) Để xóa thuộc tính của Lớp Cha.   
d) Nó là từ khóa bắt buộc khi kế thừa.  

17.  Dựa trên độ ưu tiên toán tử (`not` \> `and` \> `or`), kết quả của biểu thức sau là gì: `(3 > 5) or (7 > 3) and not (3 == 3)`?  
a) `True`   
b) `False`   
c) Lỗi cú pháp  
d) Kết quả là 0 

18.  Sự khác biệt cơ bản về tính chất giữa Tuple và List là gì?     
a) Tuple dùng ngoặc tròn, List dùng ngoặc vuông.    
b) List là bất biến (Immutable), Tuple là biến đổi được (Mutable).  
c) Tuple là bất biến (Immutable) và không thể thay đổi sau khi tạo, List là biến đổi được (Mutable).    
d) Tuple không cho phép các phần tử trùng lặp.  

19.  Trong dự án IoT, Dictionary được sử dụng để phân tích chuỗi JSON nhận từ Arduino. Điều này thuộc về khía cạnh nào trong vai trò của Dictionary?    
a) Cấu hình hệ thống (File Config).     
b) Lấy Dữ liệu Thời tiết (API).     
c) Giao tiếp Serial (Arduino) và trích xuất thông số.   
d) Lưu trữ dữ liệu lâu dài. 

20.  Giả sử bạn cần tạo một chức năng chung để in trạng thái của cả đối tượng `FanData` và `PumpData` (cùng kế thừa `RelayData`).Việc này áp dụng nguyên lý Lập trình hướng đối tượng (OOP) nào?    
a) Đóng gói (Encapsulation)     
b) Kế thừa (Inheritance)    
c) Đa hình (Polymorphism)   
d) Trừu tượng (Abstraction)

# Phần 2: Tự luận (6 điểm)

**Bài 1 (3 điểm)**  
Viết một hàm Python có tên là `tinh_chi_so_suc_khoe` nhận vào 2 tham số: **cân nặng** (kg, kiểu float) và **chiều cao** (m, kiểu float).

Hàm có nhiệm vụ:

1.  Tính chỉ số BMI theo công thức:  $BMI=\frac{m}{h^{2}}$ 
2.  Dùng câu lệnh điều kiện `if/elif/else` để xác định trạng thái sức khỏe và trả về chuỗi kết quả:
    *    $BMI<18.5$ : Trả về "Thiếu cân"
    *    $18.5\le BMI<25$ : Trả về "Bình thường"
    *    $25\le BMI<30$ : Trả về "Thừa cân"
    *    $BMI\ge 30$ : Trả về "Béo phì"
3.  Gọi hàm với dữ liệu mẫu: Cân nặng ** $75$  kg**, Chiều cao ** $1.75$  m** và in kết quả ra màn hình bằng `f-string` theo định dạng: "BMI của bạn là `<giá trị BMI>` - Trạng thái: `<trạng thái sức khỏe>`".

**Bài 2 (3 điểm)**  

Dựa trên kiến thức về OOP, hãy thực hiện các yêu cầu sau:

1.  **Định nghĩa Lớp Cha `RelayData`:**
    *   Khởi tạo (`__init__`) với 3 thuộc tính: `id`, `value`, `timestamp`.
    *   Định nghĩa phương thức `__repr__` (ghi đè) để khi `print()` đối tượng sẽ hiển thị chuỗi: `Relay: id=<id>, value=<value>`.
2.  **Định nghĩa Lớp Con `HeaterData`:**
    *   Kế thừa từ lớp `RelayData`.
    *   Thêm thuộc tính mới: `temperature_c` (nhiệt độ).
    *   Ghi đè phương thức khởi tạo (`__init__`) và sử dụng `super()` để truyền `id`, `value`, `timestamp` lên Lớp Cha.
    *   Ghi đè phương thức `__repr__` (override) để hiển thị thông tin chuyên biệt: `Heater: id=<id>, value=<value>, Temp=<temperature_c>`.
3.  **Kiểm tra:**
    *   Tạo một đối tượng `heater1` với dữ liệu: `id=101`, `value='ON'`, `timestamp='2025-10-30'`, `temperature_c=45.5`.
    *   In đối tượng `heater1` ra màn hình.

* * *

