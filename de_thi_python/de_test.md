
## Bài Trắc nghiệm: (4 điểm)
1.  Trong Python, kiểu dữ liệu nào được sử dụng để lưu trữ số nguyên?   
a. `str`   
b. `float`  
c. `int`  
d.`bool`  

2.  Cú pháp chính xác để khai báo và gán giá trị cho một **Dictionary** trong Python là gì?  
a. `my_dict = ["key": "value"]`  
b. `my_dict = ("key", "value")`  
c. `my_dict = {"key": "value"}`  
d. `my_dict = <"key": "value">`  

3.  Toán tử nào được sử dụng để tính **phần dư** trong phép chia hai số nguyên trong Python? 
a. `/`  
b. `//`  
c. `**`  
d. `%`  

4.  Từ khóa nào được dùng để định nghĩa một hàm (Function) trong Python? 
a. `function`  
b. `def`  
c. `func`  
d.`define`  

5.  Phương thức nào của Dictionary được khuyến nghị sử dụng để **truy cập giá trị** một cách an toàn (không gây lỗi `KeyError` nếu khóa không tồn tại)?  
a. `my_dict['key']`  
b. `my_dict.find('key')`  
c. `my_dict.get('key')`  
d.`my_dict.access('key')`  

6.  Mục đích chính của việc sử dụng câu lệnh `if...elif...else` là gì?  
a. Lặp lại một khối mã nhiều lần.  
b. Định nghĩa một hàm mới.  
c. Thực hiện rẽ nhánh câu lệnh, kiểm tra nhiều hơn hai điều kiện theo thứ tự ưu tiên.  
d. Khai báo một danh sách.  

7.  Trong vòng lặp `for` hoặc `while`, từ khóa **`break`** có tác dụng gì?  
a. Bỏ qua lần lặp hiện tại và chuyển sang lần lặp tiếp theo.  
b. Báo lỗi và dừng chương trình.  
c. Thoát ngay lập tức khỏi vòng lặp đang chạy.  
d. Lặp lại đoạn mã một lần nữa..

8.  Sự khác biệt cốt lõi về tính chất của kiểu dữ liệu **List** và **Tuple** là gì?  
a. List dùng dấu ngoặc vuông `[]`, Tuple dùng dấu ngoặc đơn `()`.  
b. List lưu trữ nhiều mục, Tuple chỉ lưu trữ một mục.  
c. List là có thể thay đổi (Mutable), Tuple là bất biến (Immutable).  
d. List không cho phép trùng lặp, Tuple cho phép trùng lặp..

9.  Trong lập trình hướng đối tượng (OOP), khái niệm **Tính Kế Thừa (Inheritance)** nhằm mục đích gì?  
a. Gộp thuộc tính và phương thức vào một Class.  
b. Tái sử dụng code bằng cách cho phép Lớp Con thừa hưởng từ Lớp Cha.  
c. Cho phép một hàm xử lý nhiều kiểu đối tượng khác nhau.  
d. Định nghĩa lại một phương thức đã có sẵn ở Lớp Cha..

10.  Trong cú pháp f-string như `f"Giá trị: {bien}"`, cặp dấu `{}` có vai trò gì?  
a. Đánh dấu vị trí bắt đầu và kết thúc của chuỗi.  
b. Định nghĩa một Dictionary bên trong chuỗi.  
c. Dùng để truyền (nhúng) giá trị của biến vào bên trong chuỗi ký tự.  
d. Dùng để thực hiện phép toán số học..

11.  Cho đoạn code sau, kết quả in ra màn hình là gì?

```python
x = 10
y = 3
print(x % y)
```
- Đáp án  
a. 3  
b. 1  
c. 3.333  
d. 0  

12.  Để làm tròn số `pi = 3.1415926536` thành 4 chữ số thập phân, bạn sẽ sử dụng lệnh nào?  
a. `int(pi)`  
b. `round(pi)`  
c. `round(pi, 4)`  
d.`round(4, pi)`  

13.  Câu lệnh Python nào dùng để lấy ra ngẫu nhiên **một phần tử** từ danh sách `my_list`?  
a. `random.randint(my_list)`  
b. `random.shuffle(my_list)`  
c. `random.random()`  
d. `random.choice(my_list)`  

14.  Trong đoạn code sau, điều gì xảy ra nếu người dùng nhập `10`?
```python
num = int(input("Enter a number: "))
if num % 2 != 0:
    print("Odd")
else:
    print("Even")
```
- Đáp án  
a. In ra `Odd`  
b. Báo lỗi `TypeError`  
c. In ra `Even`  
d. Không in ra gì cả

15.  Khi truy cập vào giá trị của khóa `temp` trong Dictionary lồng nhau sau, cú pháp nào là đúng?

```python
data = {"main": {"temp": 298.15, "hum": 75}}
```
- Đáp án  
a. `data['temp']`  
b. `data[0]['temp']`  
c. `data['main']['temp']`  
d. `data.main.temp`

16.  Kết quả của biểu thức logic sau là gì?
```python
print(10 > 5 and not 3 == 3 or 7 < 4)
```
- Đáp án  
a. `True`  
b. `False`  
c. `NameError`  
d. `TypeError`  

17.  Khi bạn dùng lệnh `list.copy()` (Shallow Copy) trên một List chứa các List con, điều gì xảy ra?    
a. Một List mới được tạo ra và các phần tử con cũng được tạo bản sao độc lập (Deep Copy).  
b.Một List mới được tạo, nhưng các phần tử là List con chỉ là bản sao tham chiếu (reference) đến đối tượng List con gốc.    
c. Lệnh này bị lỗi vì phải dùng thư viện `copy`.    
d. List mới hoàn toàn giống List cũ và không thể thay đổi.  

18.  Trong lập trình OOP, **Tính Đa Hình (Polymorphism)** được thể hiện rõ nhất qua cơ chế nào? 
a. Các Class Con đều phải có phương thức `__init__`.    
b. Lớp Con có thể gọi phương thức của Lớp Cha bằng `super()`.   
c. Việc có thể gọi cùng một phương thức (ví dụ: `print(device)`) trên các đối tượng khác nhau (ví dụ: `FanData` và `PumpData`) nhưng mỗi đối tượng lại thực hiện hành vi riêng biệt (ghi đè `__repr__`).    
d. Đóng gói dữ liệu và hàm vào trong một Class.

19.  Khi thực hiện truy vấn SELECT trong thư viện `sqlite3` của Python, nếu câu lệnh trả về nhiều bản ghi, phương thức nào bạn nên dùng để lấy tất cả kết quả và kết quả trả về có dạng gì?  
a. `cursor.fetchone()` và trả về một `tuple`.   
b. `cursor.fetchmany()` và trả về một `list` các `tuple`.   
c. `cursor.fetchall()` và trả về một `list` các `tuple`.     
d. `cursor.fetchall()` và trả về một `list` các `dict`. 
20.  Giả sử bạn có một List `data = [1, 5, 4]`. Đoạn code sau sẽ in ra gì?

```python
for i in data:
    if i == 5:
        continue
    print(i)
else:
    print("Done")
```
- Đáp án    
a. 1, 4 (trên hai dòng), sau đó `Done`.     
b. 1, 5, 4 (trên ba dòng), sau đó `Done`.    
c. 1, 4 (trên hai dòng), không in ra `Done`.     
d. 1, 4, Done (trên ba dòng).   


## Bài Tự Luận: (6 điểm)
**Bài 1 (3 điểm)**
- **Nhiệm vụ:** Viết một hàm Python duy nhất có tên là **`tinh_tien_hoa_don`** thực hiện tính toán tiền hóa đơn và tiền chia cho mỗi người.

- **Yêu cầu chi tiết:**
1.  Định nghĩa hàm `tinh_tien_hoa_don` nhận vào 3 tham số:
    *   `tong_tien_thanh_toan` (float)
    *   `so_nguoi` (int)
    *   `phan_tram_tip` (int)
2.  Trong hàm, tính tổng số tiền cần chia, bao gồm cả tiền tip (tip được tính dựa trên `tong_tien_thanh_toan`).
3.  Tính số tiền mỗi người phải trả.
4.  Làm tròn kết quả số tiền mỗi người phải trả đến 2 chữ số thập phân.
5.  Sử dụng câu lệnh `return` để trả về kết quả số tiền mỗi người phải trả.
6.  Gọi hàm với các giá trị mẫu (ví dụ:  $500,000 VNĐ$  cho 5 người, tip  $10%$ ) và in kết quả ra màn hình.

**Bài 2:(3 điểm)**

- **Nhiệm vụ:** Xây dựng một cấu trúc lớp mô phỏng dữ liệu cảm biến (Sensor Data) và dữ liệu thiết bị (Relay Data) sử dụng **Tính Kế Thừa**.

- **Yêu cầu chi tiết:**

1.  **Lớp Cha (`SensorData`):**
    *   Tên Class: **`SensorData`**.
    *   Phương thức `__init__` nhận 3 tham số: `name`, `value`, `unit`.
    *   Thiết lập các thuộc tính: `self.name`, `self.value`, `self.unit`.
    *   Định nghĩa phương thức `display_info()`: In ra thông tin cảm biến theo định dạng: **`[Tên]: [Giá trị] [Đơn vị]`** (Ví dụ: `Nhiet do: 35.5 C`).
2.  **Lớp Con (`TempSensor`):**
    *   Tên Class: **`TempSensor`** kế thừa từ `SensorData`.
    *   Phương thức `__init__`: Gọi phương thức `__init__` của lớp cha bằng **`super()`** và truyền các tham số tương ứng.
    *   Định nghĩa lại (Override) phương thức đặc biệt **`__repr__`** để khi in đối tượng này ra màn hình sẽ hiển thị: **`TempSensor([Giá trị] [Đơn vị])`** (Ví dụ: `TempSensor(35.5 C)`).
3.  **Tạo và Kiểm tra:**
    *   Tạo một đối tượng `nhiet_do_phong` từ lớp `TempSensor` (ví dụ: giá trị  $35.5$  và đơn vị  $C$ ).
    *   Gọi phương thức `display_info()` và in trực tiếp đối tượng ra màn hình để kiểm tra `__repr__`.
