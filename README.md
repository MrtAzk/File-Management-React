# File Management React
# Dosya Yönetim Sistemi React

**EN:** A React application for file and folder management system. Organize folders, store file URLs, and manage files with different view options.

**TR:** Dosya ve klasör yönetim sisteminin React uygulaması. Klasörleri düzenleyebilir, dosya URL'leri depolayabilir ve farklı görünüm seçenekleriyle yönetebilirsiniz.

---

## 📋 Features / Özellikler

### Core Features / Temel Özellikler
- **Folder Management / Klasör Yönetimi**: Create, organize, and manage hierarchical folder structure / Hiyerarşik klasör yapısını oluşturun ve yönetin
- **File Management / Dosya Yönetimi**: Store and manage files with URLs / Dosyaları URL ile sakla ve yönet
- **Dual View Mode / Çift Görünüm Modu**: Switch between list and grid view / Liste ve grid görünümü arasında geçiş yapın
- **Tree Menu / Ağaç Menü**: Display folder hierarchy in sidebar / Klasör hiyerarşisini yan panelde görüntüle
- **File Preview / Dosya Önizleme**: Preview selected files and images / Seçili dosyaları ve resimleri önizle

### Operations / İşlemler
- ✨ Create new folders with modal dialog / Modal ile yeni klasör oluşturma
- ✨ Create new files with name and URL / Adı ve URL ile dosya oluşturma
- ✨ Delete files and folders with bulk selection / Toplu seçim desteği ile silme
- 🔍 Toggle between list and grid views / Liste/grid görünümü geçişi
- ☑️ Bulk selection and individual item selection / Toplu ve satır bazında seçim
- 📷 Image preview and file preview display / Resim ve dosya önizlemesi

## 🏗️ Project Structure / Proje Yapısı

```
src/
├── components/
│   ├── GridView.jsx           # Grid view component / Grid görünümü bileşeni
│   ├── GridViewItem.jsx       # Grid item / Grid öğesi
│   ├── ListView.jsx           # List view component / Liste görünümü bileşeni
│   ├── ListViewİtem.jsx       # List item / Liste öğesi
│   ├── PreviewImg.jsx         # File preview panel / Dosya önizleme paneli
│   ├── ToolBar.jsx            # Action toolbar / İşlem araç çubuğu
│   ├── TreeMenu.jsx           # Tree menu container / Ağaç menü kapsayıcı
│   └── TreeMenuItem.jsx       # Tree menu item (expandable) / Ağaç menü öğesi (genişletilebilir)
├── context/
│   ├── Modal.jsx              # Modal component / Modal bileşen
│   ├── ModalContext.jsx       # Modal management context / Modal yönetim context'i
│   └── ViewContext.jsx        # View state context / Görünüm durumu context'i
├── hooks/
│   └── useBoolean.js          # Boolean state hook / Boolean durumu hook'u
├── Layout/
│   └── Main.jsx               # Main page layout / Ana sayfa düzeni
├── modals/
│   ├── CreateFileModal.jsx    # Create file modal / Dosya oluştur modal
│   └── CreateFolderModal.jsx  # Create folder modal / Klasör oluştur modal
├── pages/
│   └── FolderView.jsx         # Main page component / Ana sayfa bileşeni
├── queries/
│   └── useFolderQuery.jsx     # React Query hooks (CRUD operations) / React Query hooks (CRUD işlemleri)
├── services/
│   └── backend/
│       ├── fileMethod.js      # API file operations / API dosya işlemleri
│       └── folderMethods.js   # API folder operations / API klasör işlemleri
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## 🚀 Technology Stack / Teknoloji Stack

### Frontend Framework
- **React 19.1.1** - UI components / UI bileşenleri
- **React Router 7.9.5** - Page routing / Sayfa yönlendirmesi
- **Vite 7.1.7** - Build and dev server / Derleme ve geliştirme sunucusu

### State Management & Data Fetching / Durum Yönetimi ve Veri Yönetimi
- **React Query 5.90.6** - Server state management and data queries / Sunucu durum yönetimi ve veri sorguları
- **Context API** - Global state management (Modal, View) / Global durum yönetimi (Modal, View)

### Form Handling / Form İşleme
- **Formik 2.4.6** - Form state and validation / Form durumu ve doğrulama
- **Yup 1.7.1** - Schema-based validation / Schema tabanlı doğrulama

### HTTP Client
- **Axios 1.13.2** - API calls (base URL: http://localhost:9090) / API çağrıları

### UI & Styling / UI ve Stil
- **Tailwind CSS 4.1.16** - Utility-first CSS framework / Utility-first CSS framework
- **React Icons 5.5.0** - SVG icon library / SVG icon library

### Utilities / Araçlar
- **UUID 13.0.0** - Unique ID generation (for modal IDs) / Benzersiz ID üretimi (modal ID'leri için)

## 📁 Component Explanation / Bileşen Açıklaması

### Core Components / Temel Bileşenler

#### `Main.jsx` - Main Layout / Ana Düzen
Four-section layout:
- Left sidebar: Folder tree menu / Sol sidebar: Klasör ağacı menüsü
- Top navbar: Folder name and search box / Üst navbar: Klasör adı ve arama kutusu
- Toolbar: Action buttons / Araç çubuğu: İşlem butonları
- Main content + Right panel: File/folder list + preview / Ana içerik + Sağ panel: Dosya/klasör listesi + önizleme

#### `FolderView.jsx` - Main Page / Ana Sayfa
- Display files and subfolders of current folder / Mevcut klasörün dosyalarını ve alt klasörlerini görüntüler
- Get folder ID from URL parameters / URL parametresinden klasör ID'sini alır
- Toggle between list and grid views / Liste veya grid görünümü arasında geçiş

#### `TreeMenu.jsx` & `TreeMenuItem.jsx` - Folder Tree / Klasör Ağacı
- Display hierarchical folder structure as expandable tree / Hiyerarşik klasör yapısını genişletilebilir ağaç olarak gösterir
- Dynamically load subfolders / Alt klasörleri dinamik yükler
- Navigate to folder on click / Tıklandığında o klasöre yönlendirir

### View Components / Görünüm Bileşenleri

#### `ListView.jsx` & `ListViewİtem.jsx`
- File and folder list in table format / Tablo formatında dosya ve klasör listesi
- Selection with checkbox at the beginning / Başında checkbox ile seçim
- File and folder icons / Dosya ikonları ve klasör ikonları
- Eye icon for image preview / Resim önizlemesi için göz ikonu

#### `GridView.jsx` & `GridViewItem.jsx`
- Card-based file and folder view / Kart formatında dosya ve klasör görünümü
- Styled with Tailwind CSS card design / Tailwind CSS ile stillendirilmiş kart tasarımı
- Selection checkboxes and action icons / Seçim checkbox'ları ve işlem ikonları

#### `ToolBar.jsx`
- Create folder button / Klasör oluştur butonu
- Create file button / Dosya oluştur butonu
- Toggle list/grid view / Liste/Grid görünümü değiştir
- Delete selected items (bulk delete) / Seçili öğeleri sil (toplu silme)

#### `PreviewImg.jsx`
- Display image of selected file / Seçili dosyanın resimini gösterir
- List file names / Dosya adlarını listeler
- Preview close button / Önizleme kapatma butonu

### Context & Modals / Context ve Modals

#### `ModalContext.jsx` & `Modal.jsx`
- Modal system management / Modal sistem yönetimi
- `appear()` - Show modal / Modal göster
- `disAppear()` - Hide modal / Modal gizle
- Close on background click / Arka plan tıklaması ile kapatma

#### `ViewContext.jsx`
- Manage selected items / Seçili öğeleri yönet
- List/Grid view state / Liste/Grid görünümü durumu
- Preview file management / Önizleme dosyası yönetimi
- Operations: select, deSelect, selectAll, deSelectAll / İşlemler: seç, seçim kaldır, tümünü seç, tümünü kaldır

### Hooks

#### `useBoolean.js`
Manage boolean state:
- `toggle()` - Toggle state / Durumu değiştir
- `setTrue()` / `setFalse()` - Set directly / Direkt ayarla
- Memo and Callback optimizations / Memo ve Callback optimizasyonları

#### `useFolderQuery.jsx`
React Query hooks:
- `findOne` - Get current folder / Mevcut klasörü getir
- `findAll` - List subfolders / Alt klasörleri listele
- `findAllFile` - List files / Dosyaları listele
- `addFolder` - Create folder / Klasör oluştur
- `addFile` - Create file / Dosya oluştur
- `removeFolder` - Delete folder / Klasörü sil
- `removeFiles` - Delete file / Dosyayı sil

### Backend Services / Backend Servisleri

#### `folderMethods.js`
Folder API operations:
```javascript
list(query)          // List folders (filter by parentId) / Klasörleri listele
create(data)         // Create new folder / Yeni klasör oluştur
findById(id)         // Get folder details / Klasör detayını getir
update(id, data)     // Update folder (PUT) / Klasörü güncelle
patch(id, data)      // Partial update (PATCH) / Kısmi güncelle
remove(id)           // Delete folder / Klasörü sil
```

#### `fileMethod.js`
File API operations:
```javascript
listFile(query)      // List files (filter by parentId) / Dosyaları listele
createFile(data)     // Create new file / Yeni dosya oluştur
findByIdFile(id)     // Get file details / Dosya detayını getir
updateFile(id, data) // Update file / Dosyayı güncelle
patchFile(id, data)  // Partial update / Kısmi güncelle
removeFile(id)       // Delete file / Dosyayı sil
```

## 🔌 API Integration / API Entegrasyonu

The backend API is accessed at http://localhost:9090

Backend API'ye http://localhost:9090 adresinde bağlanır.

### Expected Endpoints / Beklenen Endpoint'ler

**Folders / Klasörler:**
- `GET /folder?parentId=xxx` - List folders / Klasörleri listele
- `GET /folder/:id` - Folder details / Klasör detayı
- `POST /folder` - Create folder / Klasör oluştur
- `PUT /folder/:id` - Update folder / Klasörü güncelle
- `PATCH /folder/:id` - Partial update folder / Klasörü kısmi güncelle
- `DELETE /folder/:id` - Delete folder / Klasörü sil

**Files / Dosyalar:**
- `GET /file?parentId=xxx` - List files / Dosyaları listele
- `GET /file/:id` - File details / Dosya detayı
- `POST /file` - Create file / Dosya oluştur
- `DELETE /file/:id` - Delete file / Dosyayı sil

### Data Format / Veri Formatı

**Create Folder / Klasör Oluştur:**
```json
{
  "name": "Folder Name / Klasör Adı",
  "parentId": null // null for root folder / Kök klasör için null
}
```

**Create File / Dosya Oluştur:**
```json
{
  "name": "File Name / Dosya Adı",
  "url": "https://example.com/image.jpg",
  "parentId": null // Folder ID / Klasörün ID'si
}
```

## 💬 Context Management / Context Yönetimi

### ViewContext (Selection & View / Seçim & Görünüm)
```javascript
{
  selectedItems: [],     // Selected items / Seçili öğeler
  select(item),          // Select item / Öğe seç
  deSelect(item),        // Deselect item / Öğe seçimini kaldır
  deSelectAll(),         // Clear all selections / Tüm seçimleri kaldır
  selectAll(items),      // Select all items / Tüm öğeleri seç
  itemIsSelected(item),  // Check if item is selected / Öğe seçili mi
  listType: 'list'|'grid', // View type / Görünüm türü
  toogleType(),          // Toggle view / Görünümü değiştir
  prevEye: object,       // Preview file / Önizleme dosyası
  setPrevEye(item),      // Set preview file / Önizleme dosyası ayarla
}
```

### ModalContext (Modal Management / Modal Yönetimi)
```javascript
{
  appear(modal),   // Show modal / Modal göster
  disAppear(id),   // Hide modal / Modal gizle
}

// Modal structure / Modal yapısı:
{
  title: string,
  children: ReactComponent,
  id: uuid // Auto-generated / Otomatik
}
```

## 🎯 Usage Flow / Kullanım Akışı

1. **Initialization / Başlangıç**: Root folder is loaded (`/` or `/?parentId=null`) / Kök klasör yüklenir
2. **Folder Display / Klasör Görüntüleme**: Files and subfolders are shown / Dosya ve alt klasörler gösterilir
3. **Open Folder / Klasör Açma**: Double-click folder or select from tree menu / Klasöre çift tıkla veya ağaç menüden seç
4. **File Selection / Dosya Seçimi**: Select file with checkbox / Checkbox ile dosya seçimi
5. **Bulk Selection / Toplu Seçim**: Select all with header checkbox / Header'daki checkbox ile tümünü seç
6. **Perform Actions / İşlem Yapma**:
   - Create new folder → Modal opens → Fill form → Send to server / Yeni klasör oluştur → Modal açılır → Form doldur → Sunucuya gönder
   - Create new file → Modal opens → Enter name and URL → Send / Yeni dosya oluştur → Modal açılır → Ad ve URL gir → Gönder
   - Select and delete → Click delete icon → API call / Seç ve sil → Sil ikonuna tıkla → API çağrısı
7. **Toggle View / Görünüm Değiştir**: Click toolbar button to switch list/grid / Araç çubuğundaki buton ile liste/grid geçişi
8. **Preview / Önizleme**: Select image → Display in right panel / Resmi seç → Sağ panelde gösterilir

## 🚀 Getting Started / Başlangıç

### Installation / Kurulum
```bash
npm install
```

### Development Server / Geliştirme Sunucusu
```bash
npm run dev
```
Starts Vite development server with HMR (Hot Module Replacement) / Vite geliştirme sunucusu başlatır ve HMR ile çalışır.

### Build / Derleme
```bash
npm run build
```
Creates production build in `dist/` folder / Üretim build'i `dist/` klasörüne oluşturur.

### Linting / Kod Kontrolü
```bash
npm lint
```
Checks code against ESLint rules / ESLint kurallarına göre kod kontrol eder.

### Preview / Önizleme
```bash
npm run preview
```
Run built version in preview server / Build edilmiş versiyonu önizleme sunucusunda çalıştırır.

## ⚙️ Configuration / Konfigürasyon

### Vite Config (`vite.config.js`)
- React plugin with JSX support / React plugin ile JSX desteği
- Tailwind CSS plugin
- Fast Refresh HMR

### ESLint Config (`eslint.config.js`)
- React Hooks rules / React Hooks kuralları
- React Refresh rules / React Refresh kuralları
- Recommended JavaScript rules / Önerilen JavaScript kuralları

## 🔄 Data Flow / Veri Akışı

```
API (Backend)
    ↓ (axios)
folderMethods.js / fileMethod.js
    ↓ (useMutation/useQuery)
useFolderQuery.jsx
    ↓ (React Query)
Components (ListView, GridView, TreeMenu)
    ↓ (Context)
ViewContext (Selection state)
    ↑ (Event handlers)
User Interaction / Kullanıcı İnteraksiyonu
```

## 🐛 Known Issues / Bilinen Sorunlar

- File operations use incorrect URL on some endpoints (`/folder` instead of `/file`) / Dosya işlemleri bazı endpoint'lerde yanlış URL kullanıyor
- Modal styling is limited (may need further development) / Modal stili sınırlı (daha geliştirilmesi gerekebilir)

## 📝 Notes / Notlar

- Uses Turkish error messages and UI text / Türkçe hata mesajları ve arayüz metinleri kullanıyor
- Custom Tailwind CSS design instead of Material Design / Material Design yerine özel Tailwind CSS tasarımı
- UUID library used for modal ID generation / UUID kütüphanesi modal ID'leri için kullanılıyor
- Form validation with Yup / Form doğrulama Yup ile yapılıyor

---

**Author / Yazar:** MrtAzk  
**Repository / Depo:** https://github.com/MrtAzk/File-Management-React
