<section>
  <!-- HEADER -->
  <div class="title-header">
    <img src="images/logo.png" alt="Logo" />
  </div>

  <!-- CENTER -->
  <div class="title-center">
    <h1>Cơ sở dữ liệu sqlite</h1>
    <h3>Giảng viên: Ths.Lâm Du Đạt</h3>
    <p>Email: datld@donga.edu.vn</p>
  </div>

  <!-- FOOTER -->
  <div class="title-footer">
    <p>Trường Đại học Đông Á : Khoa Điện – Điện tử</p>
  </div>
  
</section>

---

# Cơ sở dữ liệu Sqlite
## Mục tiêu bài học
<div class="content">

- **Hiểu**: Vai trò của CSDL (SQLite) trong dự án IoT
- **NẮM VỮNG**: 4 thao tác CRUD (Create, Read, Update, Delete) bằng câu lệnh SQL.
- **BIẾT**: Cách dùng thư viện sqlite3 của Python để thực thi các lệnh CRUD.
- **HIỂU**: Lợi ích của việc chuyển đổi dữ liệu thô (tuple) sang Đối tượng (Data Classes) (như SensorData, SettingData).

</div>

## Chuẩn đầu ra
<div class="content">

- **Viết**: Được các hàm Python để thực thi 4 thao tác CRUD
- **Chuyển đổi**: Được kết quả truy vấn (dạng tuple) thành danh sách các đối tượng

</div>

---

# Khởi tạo dữ liệu với Sqlite
## Đặt vấn đề
<div class="content">

### Vấn đề 1: Mất dữ liệu lịch sử
- Ở chế độ "auto", Arduino gửi dữ liệu nhiệt độ, độ ẩm mỗi 5 phút để app "lưu vào database
- <mark>Câu hỏi: Nếu app Python tắt, làm sao chúng ta vẽ biểu đồ (IoT Dashboard...) hoặc xem lại lịch sử? Dữ liệu trên RAM sẽ mất.</mark> 

### Vấn đề 2: Mất cài đặt ngưỡng
- Ở chế độ "manual", người dùng "thiết lập ngưỡng" (ví dụ: 35°C).
- <mark>Câu hỏi: Khi tắt app và mở lại, làm sao app nhớ được ngưỡng 35°C mà người dùng đã cài?</mark>

### Giài pháp là gì?:
<mark>Chúng ta cần LƯU TRỮ DỮ LIỆU LÂU DÀI (Persistent Storage).</mark> <!-- .element: class="fragment" -->

</div>

---

## Sqlite
<div class="content">

- Một thư viện CSDL (có sẵn trong Python).
- Siêu nhẹ, không cần cài đặt.
- Lưu toàn bộ CSDL vào 1 file duy nhất (trong dự án là iot.db).
- Hoàn hảo cho ứng dụng IoT.

</div>

---

## Nói chuyện trực tiếp với CSDL (sử dụng CLI)

<div class="content">

- Mở terminal/CMD
- Mở cơ sở dữ liệu/Tạo mới: `sqlite3 iot.db`
- Kiểm tra danh sách bảng: `.tables`
- Tạo bảng <mark>sensor_data</mark>:

```sql
CREATE TABLE sensor_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    temperature REAL,
    humidity REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

- Kiểm tra cấu trúc bảng <mark>sensor_data</mark>: `.schema sensor_data`
- Thoát cửa sổ gõ lệnh: `.exit`

</div>

---

###  Thực hành tạo bảng `fan_data`
<div class="content">

Hãy tạo thêm bảng <mark>**fan_data**</mark> với thông số sau bằng CLI
- Mục đích: Lưu trữ lịch sử trạng thái Bật/Tắt ('ON'/'OFF') của quạt

| Tên cột | Kiểu dữ liệu | Thuộc tính | Ý nghĩa |
|---|---|---|---|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | ID tự tăng, không trùng lặp |
| value | TEXT | DEFAULT "OFF" | Trạng thái, mặc định là "OFF" |
| timestamp | DATETIME | DEFAULT CURRENT_TIMESTAMP | Mốc thời gian dữ liệu được ghi |

</div>

---

### Thực hành tạo bảng `setting_data`
<div class="content">

Hãy tạo thêm bảng <mark>setting_data</mark> với thông số sau bằng CLI
- Mục đích: Lưu trữ ngưỡng cài đặt (cấu hình) của người dùng. Chỉ có 1 dòng duy nhất (id = 1) trong bảng này.

| Tên cột | Kiểu dữ liệu | Thuộc tính | Ý nghĩa |
|---|---|---|---|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | ID tự tăng |
| temperature_threshold | REAL | DEFAULT 35.0 | Ngưỡng nhiệt độ mặc định 35.0 |
| humidity_threshold | REAL | DEFAULT 70.0 | Ngưỡng độ ẩm mặc định 70.0|
| timestamp | DATETIME | DEFAULT CURRENT_TIMESTAMP | Mốc thời gian dữ liệu được ghi |

</div>

---

## CRUD qua Command Line
<mark>CRUD: CREATE  READ  UPDATE  DELETE</mark>

### INSERT (Thêm dữ liệu - Create)

<div class="content">

- Bối cảnh: Đây là lúc Arduino gửi dữ liệu hoặc ta cài đặt giá trị mặc định cho app.

<mark>Thêm dữ liệu cảm biến</mark>

```sql
INSERT INTO sensor_data (temperature, humidity)
VALUES (30.5, 75.2);
```
<mark>Thêm cài đặt mặc định</mark>

```sql
INSERT INTO setting_data (temperature_threshold, humidity_threshold) 
VALUES (35.0, 70.0);
```

</div>

---

#### Thực hành lệnh `insert`

<div class="content">

- Hãy insert dữ liệu sau vào bảng <mark>sensor_data</mark> với thông tin sau:

| temperature | humidity | timestamp |
| --- | --- | --- |
| 30.5 | 65.2 | '2025-10-03 08:00:00' |
| 40.9 | 70.1 | '2025-10-03 08:10:00' |
| 50.7 | 75.5 | '2025-10-03 08:20:00' |
| 80.7 | 90.5 | '2025-10-03 08:30:00' |
| 70.7 | 70.5 | '2025-10-03 08:40:00' |

- Hãy insert dữ liệu sau vào bảng <mark>fan_data</mark> với thông tin sau:

| value | timestamp |
| --- | --- |
| 'ON' | '2025-10-29 08:30:40' |
| 'OFF' | '2025-10-29 09:00:40' |
| 'ON' | '2025-10-29 09:00:40' |

</div>

---

### SELECT (Đọc/Truy vấn dữ liệu - Read)
<div class="content">

**Lấy tất cả dữ liệu trong bảng**:  <mark>SELECT *</mark>
```sql
SELECT * FROM sensor_data;
```
**Lấy dữ liệu có điều kiện**: <mark>SELECT ... WHERE</mark>

*Lấy record đầu tiên trong bảng `sensor_data`*
```sql
SELECT * FROM sensor_data WHERE id = 1;
```
**Lấy dữ liệu mới nhất**: <mark>SELECT .. ORDER BY...LIMIT</mark>

*Lấy 10 record mới nhất trong bảng `sensor_data`*
```sql
SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT 10;
```

</div>

---

#### SELECT NÂNG CAO:(Thống kê dữ liệu)
<div class="content">

[link: SQLite Aggregate Functions](https://www.sqlitetutorial.net/sqlite-aggregate-functions/)

**Cú pháp**: <mark>SELECT *Aggregate Functions* ... FROM ... WHERE ... </mark>

**Tính nhiệt độ trung bình**: <mark>Hàm AVG</mark>
```sql
SELECT AVG(temperature) FROM sensor_data;
```
**Tính nhiệt độ, độ ẩm trung bình trong ngày 3/10**
```sql
SELECT AVG(temperature) , AVG(humidity) FROM sensor_data WHERE timestamp BETWEEN '2025-10-03 00:00:00' AND '2025-10-03 23:59:59';
```
**Tính max , min nhiệt độ**: <mark>Hàm MAX, MIN </mark>
```sql
SELECT MAX(temperature), MIN(temperature) FROM sensor_data;
```

</div>

---

#### Thực hành lệnh `SELECT`
<div class="content">

**SInh viên thực hành làm theo các bước sau**
- Thêm dữ liệu cho bảng `sensor_data`

| temperature | humidity | timestamp |
| --- | --- | --- |
| 30.5 | 65.2 | '2025-10-29 08:00:00' |
| 40.9 | 70.1 | '2025-10-29 08:10:00' |
| 50.7 | 75.5 | '2025-10-29 08:20:00' |
| 80.7 | 90.5 | '2025-10-29 08:30:00' |
| 70.7 | 70.5 | '2025-10-29 08:40:00' |

- Lấy tất cả thông tin bảng `sensor_data`
- Lấy tất cả bản ghi trong bảng `sensor_data` khi điều kiện <mark>nhiệt độ >35 độ</mark>
- Lấy bản ghi mới nhất  trong bàng `sensor_data`
- Lấy nhiệt độ <mark>Max, Min</mark>  trong ngày <mark>29/10</mark>
- Lấy nhiệt độ <mark>trung bình</mark>  trong ngày <mark>29/10</mark>

</div>


---

### UPDATE (cập nhập dữ liệu - Update)

<div class="content">

**Bối cảnh**: Người dùng kéo thanh trượt (Scale) trên giao diện Tkinter (IoT Dashboard...) để đổi ngưỡng nhiệt độ từ 35 lên 37.
- Cú pháp <mark>UPDATE ... SET... WHERE ...</mark>
```sql
UPDATE setting_data SET temperature_threshold = 37.0 WHERE id = 1;
```
- <mark>Kiểm tra</mark>: Gõ lại `SELECT * FROM setting_data`; để thấy giá trị đã thay đổi.
- <mark>Chú ý: Nếu UPDATE mà quên WHERE, tất cả các dòng sẽ bị cập nhật!</mark>

</div>

---

#### Thực hành lệnh `UPDATE`

<div class="content">

**Bối cảnh**: Người dùng kéo thanh trượt (Scale) trên giao diện Tkinter (IoT Dashboard...) để đổi <mark>ngưỡng độ ẩm  từ 70 xuống 60 </mark>
- Thực hiện lệnh `update` xuống bảng `setting_data`
- kiểm tra lại bằng lệnh `select`

</div>

---

### DELETE( Xóa dữ liệu)

<div class="content">

**Bối cảnh**: Thường trong **hệ thống Iot** <mark> dữ liệu cũ </mark> sẽ được xóa trong khoảng thời gian nhất định (1 tháng , 6 tháng, 1 năm) nhằm giải phóng bộ nhớ
- Cú pháp: <mark>DELETE FROM ... WHERE ...</mark>
- Xóa dữ liệu cảm biến trong khoảng thời gian <mark>03/10/2025 08:00  đến 03/10/2025 08:20</mark>

```sql
DELETE FROM sensor_data 
WHERE timestamp BETWEEN '2025-10-03 08:00:00' AND '2025-10-03 08:20:00';
```
- <mark>**Chú ý**</mark>: Khi `DELETE` luôn kèm theo điều kiện `WHERE`  nếu không sẽ xóa hết tất cả dữ liệu của bảng

</div>

---

#### Thực hành lệnh DELETE

<div class="content">

**Bối cảnh** : Thực hành xóa dữ liệu `sensor_data`
- Dùng lệnh `SELECT` để đọc tất cả dữ liệu
- Dùng lệnH `DELETE` để xóa dữ liệu theo cá bước sau
  - Xóa dữ liệu theo `id`: chọn một `id` bất kỳ và xóa dữ liệu
  - Xóa dữ liệu quá nóng: Thực hiện xóa dữ liệu khi điều kiện <mark>nhiệt độ >40 độ</mark>

</div>

---

# Tự động hóa CRUD bằng python

## Mục tiêu

<div class="content">

- SV hiểu cách dùng thư viện sqlite3 để thực thi 4 lệnh CRUD (INSERT, SELECT, UPDATE, DELETE).
- SV hiểu tầm quan trọng của việc dùng Placeholder (?) để chống lỗi SQL Injection.
- SV phân biệt được fetchone() (lấy 1) và fetchall() (lấy nhiều).

</div>

## Chuẩn đầu ra
<div class="content">

- Viết được các hàm Python để INSERT, SELECT, UPDATE, DELETE
- Biết cách "gói" dữ liệu tuple (kết quả thô từ CSDL) vào các Data Class (như SensorData, SettingData)

</div>

---

## Đặt vấn đề

**Chúng ta đã biết (Tiết 1, 2):**
- Dùng CLI (sqlite3 iot.db) để "gõ tay" các lệnh SQL (CRUD) và thấy kết quả ngay.

**Vấn đề**
- Ứng dụng Python (IoT Dashboard...) không thể "gõ tay" như vậy.
- Làm sao App của chúng ta tự động:
  - INSERT dữ liệu sensor_data khi Arduino gửi lên?
  - UPDATE ngưỡng setting_data khi người dùng kéo thanh trượt?
  - SELECT dữ liệu để vẽ biểu đồ?

**Giải pháp**

<mark>Dùng thư viện **sqlite3** của Python để "gửi" các lệnh SQL này đi.</mark>

---

## 5 bước kết nối với `sqlite`

<div class="content">

```python step
# 1. Import thư viện
import sqlite3
# 2. Kết nối (Connect)
# Lệnh này sẽ tạo file 'iot.db' nếu nó chưa tồn tại
conn = sqlite3.connect('iot.db') 
# 3. Tạo con trỏ (Cursor)
# Con trỏ là đối tượng để ta ra lệnh SQL
cursor = conn.cursor() 
# 4. Tạo lệnh sql và thực thi (Execute)
sql_command = "..." 
cursor.execute(sql_command) 
# 5. Lưu thay đổi (Commit) và Đóng (Close)
conn.commit() # Bắt buộc phải có để LƯU lại thay đổi
conn.close()  # Đóng kết nối
```

</div>

---

## Ghi dữ liệu vào database (INSERT)

<div class="content">

Arduino gửi dữ liệu cảm biến (ví dụ: T=30.5, H=70)

```python
import sqlite3
conn = sqlite3.connect('iot.db')
cursor = conn.cursor()
new_temp = 30.5
new_hum = 70.0
# 1. Câu lệnh SQL
sql = "INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)"
# 2. Dữ liệu (phải là 1 tuple)
params = (new_temp, new_hum)
# 3. Thực thi
cursor.execute(sql, params)
# 4. BẮT BUỘC KHI THAY ĐỔI DỮ LIỆU!
conn.commit() 
conn.close()
```

</div>

---

## BẢO MẬT: LỖI SQL INJECTION LÀ GÌ?
<div class="content">

- Nếu trong code ta viết câu lệnh như sau

```python
sql = f"INSERT INTO sensor_data (temperature, humidity) VALUES ({new_temp}, {new_hum})"
```

- Chyện gì xảy ra khi kẻ tấn công nhập trên giao diện

<mark>`new_temp_doc_hai = "30.5); DROP TABLE setting_data; --"`</mark>

Lúc này lệnh sql sẽ là
```python
sql = INSERT INTO sensor_data (temperature, humidity) VALUES (30.5); DROP TABLE setting_data; --, 70.0)
```
<mark>Kết quả: Xóa sạch dữ liệu database: **DROP TABLE setting_data** </mark>

<mark>**GIẢI PHÁP**: LUÔN DÙNG PLACEHOLDER (?)</mark> thực thi lệnh sql với tham số

</div>

---

## Truy vấn dữ liệu (SELECT)

<div class="content">

- Ghi dữ liệu thì phải commit(). Nhưng đọc dữ liệu (SELECT) thì KHÔNG cần commit(). Thay vào đó, chúng ta cần 'LẤY' (Fetch) kết quả về."
- Các hàm `Fetch`
  - `cursor.fetchone()`: Lấy **1** dòng đầu tiên (trả về <mark>1 tuple</mark>). Nếu không có, trả về None.
  - `cursor.fetchall()`: Lấy **TẤT CẢ** các dòng còn lại (trả về <mark>1 list các tuple</mark>). Nếu không có, trả về list rỗng [].

</div>

---

### `SELECT + fetchone`

<div>

- Khi app khởi động, nó cần lấy ngưỡng cài đặt hiện tại (chỉ 1 dòng) từ setting_data để hiển thị

```python
# ... (kết nối)
sql = "SELECT * FROM setting_data WHERE id = 1"
cursor.execute(sql)

# Lấy 1 dòng
data_tuple = cursor.fetchone()
# data_tuple sẽ là: (1, 38.0, 85.0, '2025-10-29...')

if data_tuple:
    print(f"Ngưỡng nhiệt (kiểu tuple): {data_tuple[1]}")
    print(f"Ngưỡng ẩm (kiểu tuple): {data_tuple[2]}")

conn.close()
```

</div>

---

### `SELECT + fetchall`

<div class="content">

- Để vẽ biểu đồ, app  cần lấy 10 giá trị cảm biến mới nhất

```python
# ... (kết nối)
num_records = 10
sql = "SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT ?"
cursor.execute(sql, (num_records,)) # tuple
# Lấy TẤT CẢ các dòng (tối đa 10)
list_of_tuples = cursor.fetchall()
# [(5, 31.0, ...), (4, 30.5, ...), (3, ...)]
for row_tuple in list_of_tuples:
    print(f"Nhiệt độ: {row_tuple[1]}") # Vẫn dùng index
conn.close()
```

</div>

---

## Cập nhập dữ liệu (UPDATE)

<div class="content">

**Tình huống**: Người dùng đang ở chế độ "manual" Họ kéo thanh trượt (Scale) để thay đổi ngưỡng nhiệt độ.

**Nhiệm vụ**: Ứng dụng Python phải ngay lập tức gửi lệnh UPDATE đến CSDL để cập nhật dòng id=1 trong bảng `setting_data`

```python
# ... (kết nối)
# Giả sử new_temp = 37.5, new_hum = 82.0
sql = "UPDATE setting_data SET temperature_threshold = ?, humidity_threshold = ? WHERE id = ?"
params = (37.5, 82.0, 1)
cursor.execute(sql, params)
conn.commit()
```

</div>

---

## Xóa dữ liệu (DELETE)

<div class="content">

- **Tình huống**: Bảng sensor_data ngày càng lớn (dữ liệu 5 phút/lần)
- **Nhiệm vụ**: Chúng ta cần "dọn dẹp" 

<mark>Xóa bản ghi theo id (trường hợp lỗi)</mark>

```python
# Giả sử muốn xóa bản ghi có id = 5
sql = "DELETE FROM sensor_data WHERE id = ?"
params = (5,) # Phải là tuple (5,) chứ không phải (5)
cursor.execute(sql, params)
conn.commit()
```

<mark>Xóa bản ghi sau 30 ngày</mark>

```python
sql = "DELETE FROM sensor_data WHERE timestamp < datetime('now', '-30 days')"
cursor.execute(sql)
conn.commit()
```

</div>

---

# Model class (Lớp mô hình)
## Đặt vấn đề
<div class="content">

- Sau khi chạy <mark>`cursor.execute("SELECT * ...")`</mark>
  - `cursor.fetchone() ➡️ 1 tuple, ví dụ: (1, 35.0, 70.0, '2025-10-30...')`
  - `cursor.fetchall() ➡️ 1 list các tuple, ví dụ: [(1, 30.5, 75.2, ...), (2, 31.0, 76.0, ...)]`
- Khi ta dùng kết quả này trong ứng dụng

```python
# ... (kết nối, execute) ...
sensor_list = cursor.fetchall() # Trả về list các tuple
for data in sensor_list:
    nhiet_do_cam_bien = data[1] # vấn đề phát sinh 
```
- Cách làm rất tệ: Khó đọc (Dùng <marK>Magic number</mark>): [1] là gì? [2] là gì?

**Giải pháp**: <mark>Chúng ta sẽ sử dụng các "khuôn" (class) đã được định nghĩa sẵn</mark>

</div>

---

## Thực hành tạo model class: `sensor_data`
### Bước 1: Tạo model class

```python
class SensorData:
    def __init__(self, id, temperature, humidity, timestamp):
        self.id = id
        self.temperature = temperature
        self.humidity = humidity
        self.timestamp = timestamp

    def __repr__(self):
        # Hàm này giúp print object ra đẹp hơn
        return f"<SensorData T={self.temperature}, H={self.humidity}>"
```
---
### Bước 2: Truy vấn và trả về model class

<div class="content" style="font-size:20px">
 
 ```python step
def get_sensors_from_num(num) 
  results_list = [] # List rỗng để chứa các object
  conn = sqlite3.connect('iot.db')
  cursor = conn.cursor()
  sql = "SELECT * FROM sensor_data ORDER BY timestamp DESC LIMIT ?"
  params = (num,)
  cursor.execute(sql, params)
  list_of_tuples = cursor.fetchall()
  for row in list_of_tuples:
    data_obj = SensorData(id=row[0],temperature=row[1],
    humidity=row[2],
    timestamp=row[3])
    results_list.append(data_obj)
  conn.close()
  return results_list
```

</div>

---
# Kết thúc
 <script src="assets/my_script.js"></script>