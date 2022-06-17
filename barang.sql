INSERT INTO jenis_barang VALUES
('J001','makanan'),
('J002','minuman'),
('J003','Bahan Pokok'),
('J004','elektronik'),
('J005','ATK'),
('J006','Obat-obatan')
;
INSERT INTO barang VALUES
('B001','Chitato',500,7000,'J001'),
('B002','Sari Roti Rasa Coklat',470,5000,'J001'),
('B003','Sari Roti Rasa Keju', 600, 5000,'J001'),
('B004','Milo',500,8000,'J002'),
('B005','Baterai ABC A3',330,11000,'J004'),
('B006','Minyak Goreng Sania 2L',290,48000,'J003'),
('B007','Beras Bulog 5kg',420,50000,'J003'),
('B008','Antangin Cair Mint',310,2000,'J006'),
('B009','Bolpoin pilot',870,2000,'J005'),
('B010','Penghapus Joyko',770,1500,'J005'),
('B011','Pensil Faber Castle',230,4000,'J005'),
('B012','Air Mineral Aqua 600ml',920,3500,'J002'),
('B013','Ale-Ale 200ml',660,1000,'J002'),
('B014','Teh Gelas 200ml',330,1000,'J002'),
('B015','Coca cola 250ml',750,5000,'J002'),
('B016','Pepsi 250ml',210,5000,'J002'),
('B017','Nescafe 400ml',810,10000,'J002'),
('B018','Decolgen',310,2000,'J006'),
('B019','Minyak kayu putih cap lang',200,13000,'J006'),
('B020','FreshCare Original',540,8000,'J006'),
('B021','Komix obat batuk',210,2000,'J006'),
('B022','Ultraflu',690,3000,'J006');

INSERT INTO kasir
VALUES
('K001','Joko','Jl. Cendana no. 51'), 
('K002','Bowo','Jl. Cemara Rebus no. 41'), 
('K003','Sandi','Jl. Gayam no. 69'), 
('K004','Anwar','Jl. Kahuripan no 21');


INSERT INTO transaksi VALUES
('T001',1,5,2022,'K002','P001'),
('T002',1,5,2022,'K002','P002'),
('T003',1,5,2022,'K002','P003'),
('T004',1,5,2022,'K002','P004'),
('T005',2,5,2022,'K004','P003'),
('T006',2,5,2022,'K004','P001'),
('T007',2,5,2022,'K004','P002'),
('T008',2,5,2022,'K004','P004');

INSERT INTO `pelanggan` (`kode_pelanggan`, `nama`, `alamat`, `telp`) VALUES
('P001', 'Rudy', 'Jl. Kemayoran no. 92', '081399429333'),
('P002', 'Budi', 'Jl. Oncom Rebus no. 13', '085441859014'),
('P003', 'Aldo', 'Jl. Sultan Raja no. 99', '089449933789'),
('P004', 'Michael', 'Jl. Ki Hadjar Dewantara no 45', '081399429333');

INSERT INTO transaksi_barang VALUES
('B006','T001',2),
('B008','T001',1),
('B013','T001',2),
('B017','T001',4),
('B001','T002',7),
('B003','T002',5),
('B007','T002',7),
('B013','T003',1),
('B015','T003',8),
('B018','T003',4),
('B020','T003',2),
('B012','T003',8),
('B010','T003',3),
('B015','T004',4),
('B012','T004',7),
('B016','T005',5),
('B001','T005',6),
('B004','T005',2),
('B019','T005',3),
('B007','T006',2),
('B013','T007',2),
('B008','T007',3),
('B006','T007',6),
('B020','T007',8),
('B016','T008',2),
('B010','T008',6),
('B022','T008',7),
('B017','T008',5),
('B012','T008',8),
('B011','T008',3),
('B015','T008',8),
('B002','T008',4);
ALTER TABLE transaksi RENAME COLUMN hari TO tanggal;

INSERT INTO transaksi VALUES
('T001','2022-11-01','K004', 'P001'),
('T002','2022-11-02','K001', 'P002'),
('T003','2022-11-02','K001', 'P004'),
('T004','2022-11-02','K001', 'P002'),
('T005','2022-11-03','K002', 'P001'),
('T006','2022-11-03','K003', 'P004'),
('T007','2022-11-03','K001', 'P001'),
('T008','2022-11-03','K001', 'P004'),
('T009','2022-11-04','K002', 'P001'),
('T010','2022-11-04','K001', 'P001'),
('T011','2022-11-04','K001', 'P004'),
('T012','2022-11-05','K003', 'P002'),
('T013','2022-11-05','K001', 'P001'),
('T014','2022-11-06','K004', 'P001'),
('T015','2022-11-07','K004', 'P001'),
('T016','2022-11-07','K002', 'P001'),
('T017','2022-11-07','K003', 'P002'),
('T018','2022-11-07','K002', 'P003'),
('T019','2022-11-08','K004', 'P002'),
('T020','2022-11-08','K003', 'P003'),
('T021','2022-11-08', 'K003', 'P004'),
('T022','2022-11-13', 'K001', 'P002'),
('T023','2022-11-13', 'K001', 'P003'),
('T024','2022-11-15', 'K001', 'P004'),
('T025','2022-11-15', 'K004', 'P002'),
('T026','2022-11-21', 'K003', 'P004'),
('T027','2022-11-27', 'K001', 'P001'),
('T028','2022-11-27', 'K003', 'P003'),
('T029','2022-11-27','K004', 'P002'),
('T030','2022-12-04','K002', 'P004'),
('T031','2022-12-06','K003', 'P002'),
('T032','2022-12-06','K002', 'P004'),
('T033','2022-12-06','K002', 'P003'),
('T034','2022-12-06', 'K002', 'P003'),
('T035','2022-12-12', 'K004', 'P003'),
('T036','2022-12-12', 'K001', 'P002'),
('T037','2022-12-17', 'K004', 'P001'),
('T038','2022-12-25', 'K001', 'P002'),
('T039','2022-12-25', 'K002', 'P002'),
('T040','2022-12-25','K002', 'P001'),
('T041','2023-01-03','K004', 'P004'),
('T042','2023-01-03','K002', 'P004'),
('T043','2023-01-17','K002', 'P002'),
('T044','2023-01-17','K004', 'P002'),
('T045','2023-01-17','K004', 'P002'),
('T046','2023-01-18','K003', 'P001'),
('T047','2023-01-18','K003', 'P003'),
('T048','2023-01-23','K001', 'P002'),
('T049','2023-01-23','K002', 'P004'),
('T050','2023-01-23','K002', 'P004');

insert into transaksi values 
('T001', 1, 11, 2022, 'K004', 'P001'),
('T002', 2, 11, 2022, 'K001', 'P002'),
('T003', 2, 11, 2022, 'K001', 'P004'),
('T004', 2, 11, 2022, 'K001', 'P002'),
('T005', 3, 11, 2022, 'K002', 'P001'),
('T006', 3, 11, 2022, 'K003', 'P004'),
('T007', 3, 11, 2022, 'K001', 'P001'),
('T008', 3, 11, 2022, 'K001', 'P004'),
('T009', 4, 11, 2022, 'K002', 'P001'),
('T010', 4, 11, 2022, 'K001', 'P001'),
('T011', 5, 11, 2022, 'K001', 'P004'),
('T012', 5, 11, 2022, 'K003', 'P002'),
('T013', 6, 11, 2022, 'K001', 'P001'),
('T014', 7, 11, 2022, 'K004', 'P001'),
('T015', 7, 11, 2022, 'K004', 'P001'),
('T016', 7, 11, 2022, 'K002', 'P001'),
('T017', 7, 11, 2022, 'K003', 'P002'),
('T018', 8, 11, 2022, 'K002', 'P003'),
('T019', 8, 11, 2022, 'K004', 'P002'),
('T020', 8, 11, 2022, 'K003', 'P003'),
('T021', 13, 11, 2022, 'K003', 'P004'),
('T022', 13, 11, 2022, 'K001', 'P002'),
('T023', 15, 11, 2022, 'K001', 'P003'),
('T024', 15, 11, 2022, 'K001', 'P004'),
('T025', 21, 11, 2022, 'K004', 'P002'),
('T026', 27, 11, 2022, 'K003', 'P004'),
('T027', 27, 11, 2022, 'K001', 'P001'),
('T028', 27, 11, 2022, 'K003', 'P003'),
('T029', 4, 12, 2022, 'K004', 'P002'),
('T030', 6, 12, 2022, 'K002', 'P004'),
('T031', 6, 12, 2022, 'K003', 'P002'),
('T032', 6, 12, 2022, 'K002', 'P004'),
('T033', 6, 12, 2022, 'K002', 'P003'),
('T034', 12, 12, 2022, 'K002', 'P003'),
('T035', 12, 12, 2022, 'K004', 'P003'),
('T036', 17, 12, 2022, 'K001', 'P002'),
('T037', 25, 12, 2022, 'K004', 'P001'),
('T038', 25, 12, 2022, 'K001', 'P002'),
('T039', 25, 12, 2022, 'K002', 'P002'),
('T040', 3, 1, 2023,  'K002', 'P001'),
('T041', 3, 1, 2023,  'K004', 'P004'),
('T042', 17, 1, 2023, 'K002', 'P004'),
('T043', 17, 1, 2023, 'K002', 'P002'),
('T044', 17, 1, 2023, 'K004', 'P002'),
('T045', 18, 1, 2023, 'K004', 'P002'),
('T046', 18, 1, 2023, 'K003', 'P001'),
('T047', 23, 1, 2023, 'K003', 'P003'),
('T048', 23, 1, 2023, 'K001', 'P002'),
('T049', 23, 1, 2023, 'K002', 'P004'),
('T050', 23, 1, 2023, 'K002', 'P004');


SELECT t.tanggal 'Tanggal',SUM(tb.qty*b.harga_barang) 'Pemasukan' FROM transaksi_barang tb 
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON tb.kode_barang = b.kode_barang
GROUP BY t.tanggal
ORDER BY t.tanggal;

SELECT WEEK(t.tanggal)'Minggu',SUM(tb.qty*b.harga_barang) 'Pemasukan' FROM transaksi_barang tb 
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON tb.kode_barang = b.kode_barang
GROUP BY WEEK(t.tanggal)
ORDER BY YEAR(t.tanggal),WEEK(t.tanggal);

SELECT MONTH(t.tanggal)'Bulan',SUM(tb.qty*b.harga_barang) 'Pemasukan' FROM transaksi_barang tb 
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON tb.kode_barang = b.kode_barang
GROUP BY MONTH(t.tanggal)
ORDER BY YEAR(t.tanggal),MONTH(t.tanggal);

SELECT YEAR(t.tanggal)'Tahun',SUM(tb.qty*b.harga_barang) 'Pemasukan' FROM transaksi_barang tb 
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON tb.kode_barang = b.kode_barang
GROUP BY YEAR(t.tanggal)
ORDER BY t.tanggal;

SELECT t.no_kasir 'No Kasir',k.nama 'Nama Kasir',t.tanggal, SUM(tb.qty*b.harga_barang) 'pemasukan' FROM transaksi_barang tb 
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN kasir k ON k.no_kasir = t.no_kasir
JOIN barang b ON tb.kode_barang = b.kode_barang
GROUP BY t.no_kasir,DAY(t.tanggal)
ORDER BY t.no_kasir;

SELECT t.tanggal ,k.nama 'Nama Kasir', k.no_kasir 'No Kasir', COUNT(t.kode_transaksi) 'total transaksi' FROM kasir k
JOIN transaksi t ON t.no_kasir = k.no_kasir
GROUP BY k.no_kasir,DAY(t.tanggal)
ORDER BY k.no_kasir;

SELECT b.nama_barang 'Nama Barang',MONTH(t.tanggal) 'Bulan', SUM(tb.qty) 'jumlah penjualan' FROM transaksi_barang tb
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON b.kode_barang = tb.kode_barang
GROUP BY MONTH(t.tanggal),b.kode_barang;

SELECT jb.nama_jenis 'Nama Jenis',MONTH(t.tanggal) 'Bulan', SUM(tb.qty) 'jumlah penjualan' FROM transaksi_barang tb
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
JOIN barang b ON b.kode_barang = tb.kode_barang
JOIN jenis_barang jb ON b.kode_jenis = jb.kode_jenis
GROUP BY MONTH(t.tanggal),b.kode_jenis
ORDER BY t.tanggal;

SELECT * FROM barang WHERE stok_barang < 50;

SELECT t.tanggal, b.*,t.kode_transaksi FROM barang b
JOIN transaksi_barang tb ON tb.kode_barang = b.kode_barang
JOIN transaksi t ON t.kode_transaksi = tb.kode_transaksi
WHERE t.tanggal > (SELECT MAX(tanggal) FROM transaksi)-7;

-- DAY(t.tanggal)>((SELECT MAX(DAY(t.tanggal)) FROM transaksi WHERE MONTH(t.tanggal) = (SELECT MAX(MONTH(t.tanggal)) FROM transaksi WHERE YEAR(t.tanggal) = (SELECT MAX(YEAR(t.tanggal)) FROM transaksi)) )-7)
-- AND MONTH(t.tanggal) = (SELECT MAX(MONTH(t.tanggal)) FROM transaksi WHERE YEAR(t.tanggal) = (SELECT MAX(YEAR(t.tanggal)) FROM transaksi))
-- AND YEAR(t.tanggal) = (SELECT MAX(YEAR(t.tanggal)) FROM transaksi)

INSERT INTO info VALUES
('2022-03-11',31),
('2022-03-11',22),
('2022-03-11',21),
('2022-03-11',16),
('2022-02-11',20),
('2022-02-11',18),
('2022-01-11',31),
('2022-01-11',36),
('2022-01-11',25),
('2022-01-11',41),
('2022-01-11',43);