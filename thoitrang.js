const man = [
    {
      id: 1,
      name: "Áo Louis Vuitton Monogram",
      price: "250.000",
      image: "https://yeli.vn/resources/uploaded/YeliShop/Products/2021/07/14523/order-louis-vuitton-monogram-quan-ao-tong-hop-1-637611011152910176.jpg",
      quantity: "400.000",
      detail: "Mô tả: Áo thun có in họa tiết Monogram đặc trưng của Louis Vuitton.Chất liệu: Vải cotton cao cấp, mềm mại và thoáng khí.Phong cách: Đơn giản và sang trọng, dễ kết hợp với nhiều trang phục.",
    },
  
    {
      id: 2,
      name: "Áo Khoác lông cừu thể thao Donkey Louis Vuitton Night",
      price: "398.000",
      image: "https://www.duybrand.com/images/202209/goods_img/99289_P_1662339800984.jpg",
      quantity: "400.000",
      detail: "Mô tả: Áo khoác thể thao dáng dài, thiết kế độc đáo với họa tiết Donkey đặc trưng. Chất liệu: Lông cừu cao cấp, giữ ấm tốt trong mùa đông. Phong cách: Phá cách và thể thao, phù hợp cho các hoạt động ngoài trời vào ban đêm.",
    },
  
    {
      id: 3,
      name: "Áo da LV cổ đức kéo khoá hoạ tiết Morgan",
      price: "300.000",
      image: "https://product.hstatic.net/1000205116/product/z2860622066578_fe7b87c4c8eeb53489a544effacf9fdd_a635898cd8c44e31acbf44fd1c56cfbc_large.jpg",
      quantity: "400.000",
      detail : "Mô tả: Áo da cổ điển với thiết kế cổ đức và chi tiết hoạ tiết Morgan. Chất liệu: Da bò cao cấp, bền và mềm mại. Phong cách: Lịch lãm và thanh lịch, thích hợp cho các dịp quan trọng và công việc.",
    },
  
    {
      id: 4,
      name: "Ví cầm tay nam Louis Vuitton ",
      price: "400.000",
      image: "https://phongcach.biz/wp-content/uploads/2021/01/Anh-1-Vi-cam-tay-nam-Louis-Vuitton-dang-dai-voi-giay-luoi-la-su-ket-hop-hoan-hao-Nguon-Internet.jpg",
      quantity: "400.000",
      detail: "Mô tả: Ví cầm tay nam nhỏ gọn và tiện dụng, có logo LV truyền thống. Chất liệu: Da bò hoặc da bê cao cấp, với độ bền và đẹp mắt. Phong cách: Sang trọng và hiện đại, phù hợp cho các buổi tiệc hoặc đi làm.",
    },
  ];
  const women = [
    {
      id: 1,
      name: "Set váy nữ Dior cao cấp",
      price: "1.250.000",
      image: "https://hotgirlshop.vn/Uploads/Products/20072021/News/2072055635-set-ao-vay-dior-cao-cap-hoa-tiet-logo.jpg",
      quantity: "400.000",
      detail:"Mô tả: Bộ váy nữ sang trọng của Dior với thiết kế độc đáo và chất liệu cao cấp. Chất liệu: Thường là lụa, chiffon hoặc vải satin, tạo cảm giác mềm mại và mượt mà. Phong cách: Thu hút và quý phái, thích hợp cho các dịp đặc biệt hoặc sự kiện quan trọng.",
    },
  
    {
      id: 2,
      name: "Áo von tay loe cúc ngực & Chân váy Taffa",
      price: "398.000",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ls7zvg84ucw401",
      quantity: "400.000",
      detail: "Mô tả: Bộ trang phục gồm áo von tay loe và chân váy Taffa mang đến vẻ đẹp nữ tính và duyên dáng. Chất liệu: Thường là vải cotton hoặc vải len mềm mại và thoáng khí. Phong cách: Elegance và thanh lịch, phù hợp cho các buổi hẹn hò hoặc đi làm.",
    },
  
    {
      id: 3,
      name: "Áo khoác nỉ trái tim in tay và ngực tay chuông  VAA755",
      price: "300.000",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loc5me4x8vpn1a",
      quantity: "400.000",
      detail: "Mô tả: Áo khoác nỉ với họa tiết trái tim in tay và ngực tay chuông, tạo điểm nhấn cá nhân và nổi bật. Chất liệu: Nỉ hoặc vải nỉ mềm mại, giữ ấm tốt trong mùa đông. Phong cách: Năng động và cá tính, thích hợp cho các hoạt động ngoài trời và cuộc sống hàng ngày.",
    },
  
    {
      id: 4,
      name: "Quần Jean ống rộng nữ lưng cao phối màu sơn xanh xám nhạt",
      price: "400.000",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li9yitdqcnpoa0",
      quantity: "400.000",
      detail: "Mô tả: Quần jean nữ kiểu ống rộng, lưng cao, được phối màu sơn xanh xám nhạt, mang lại vẻ đẹp thời trang và phong cách. Chất liệu: Jean co giãn thoải mái, tạo sự thoải mái và linh hoạt khi di chuyển. Phong cách: Thời trang và hiện đại, dễ kết hợp với nhiều loại trang phục khác nhau, phù hợp cho cả đi làm và đi chơi.",
    },
  ];
  function Man() {
    var html = "";
    for (i in man) {
      html + "<tr>";
      html += "<td>" + man[i].id + "</td>";
      html += "<td>" + man[i].name + "</td>";
      html +=
        "<td><img src=" + man[i].image + " style=height:50px;width:50px></td>";
      html += "<td>" + man[i].price + "</td>";
      html += "<td>" + man[i].quantity + "</td>";
   
      html += "<td><button class='edit-btn' onclick='editProductMan(" + i + ")'>Edit</button></td>";
      html += "<td><button class='delete-btn' onclick='confirmDeleteFromMan(" + i + ")'>Delete</button></td>";
      html += "<td><button class='detail-btn' onclick='DetailProductMan(" + i + ")'>Detail</button></td>";
      html += "</tr>";
      document.getElementById("tbl").innerHTML = html;
    }
    return html;
  
  }
  function Women() {
    var html = "";
    for (i in women) {
      html + "<tr>";
      html += "<td>" + women[i].id + "</td>";
      html += "<td>" + women[i].name + "</td>";
      html +=
        "<td><img src=" + women[i].image + " style=height:50px;width:50px></td>";
      html += "<td>" + women[i].price + "</td>";
      html += "<td>" + women[i].quantity + "</td>";
      html += "<td><button class='edit-btn' onclick='editProductWomen(" + i + ")'>Edit</button></td>";
      html += "<td><button class='delete-btn' onclick='confirmDeleteFromWomen(" + i + ")'>Delete</button></td>";
      html += "<td><button class='detail-btn' onclick='DetailProductWomen(" + i + ")'>Detail</button></td>";
      html += "</tr>";
      document.getElementById("tbl").innerHTML = html;
    }
  
    return html;
  
  }
  
  function createProduct() {
    var ID = document.getElementById("id").value;
    var Name = document.getElementById("name").value;
    var Image = document.getElementById("img").value;
    var Price = document.getElementById("price").value;
    var Quantity = document.getElementById("quantity").value;
    var Select = document.getElementById("Select").value;
    var Detail = document.getElementById("detail").value;
  
    var newProduct = {
      id: ID,
      name: Name,
      image: Image,
      price: Price,
      quantity: Quantity,
      detail: Detail,
    };
  
    if (Select === "man") {
      man.push(newProduct);
    } else if (Select === "women") {
      women.push(newProduct);
    }
  
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("img").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("detail").value = "";
  
    show(Select === "man" ? arr : women);
  }
  
  function editProductMan(index) {
    document.getElementById("editProductName").value = man[index].name;
    document.getElementById("editProductImage").value = man[index].image;
    document.getElementById("editProductPrice").value = man[index].price;
    document.getElementById("editProductQuantity").value = man[index].quantity;
    document.getElementById("editProductDetail").value = man[index].detail;
    document.getElementById("editFormMan").style.display = "block";
    document.getElementById("editIndexMan").value = index;
    document.getElementById("editFormWomen").style.display = "none";
  }
  function editProductWomen(index) {
    document.getElementById("editProductNameWomen").value = women[index].name;
    document.getElementById("editProductImageWomen").value = women[index].image;
    document.getElementById("editProductPriceWomen").value = women[index].price;
    document.getElementById("editProductQuantityWomen").value = women[index].quantity;
    document.getElementById("editProductDetailWomen").value = women[index].detail;
    document.getElementById("editFormWomen").style.display = "block";
    document.getElementById("editIndexWomen").value = index;
    document.getElementById("editFormMan").style.display = "none";
  
  } function updateProduct() {
    var newName = document.getElementById("editProductName").value;
    var newImage = document.getElementById("editProductImage").value;
    var newPrice = document.getElementById("editProductPrice").value;
    var newQuantity = document.getElementById("editProductQuantity").value;
    var newDetail = document.getElementById("editProductDetail").value;
    var indexToUpdate = parseInt(
      document.getElementById("editIndexMan").value
    );
    man[indexToUpdate].name = newName;
    man[indexToUpdate].image = newImage;
    man[indexToUpdate].price = newPrice;
    man[indexToUpdate].quantity = newQuantity;
    man[indexToUpdate].detail = newDetail;
  
    document.getElementById("editFormMan").style.display = "none";
    Man();
  }
  function updateProductWomen() {
    var newName = document.getElementById("editProductNameWomen").value;
    var newImage = document.getElementById("editProductImageWomen").value;
    var newPrice = document.getElementById("editProductPriceWomen").value;
    var newQuantity = document.getElementById("editProductQuantityWomen").value;
    var newDetail = document.getElementById("editProductDetailWomen").value;
  
    var indexToUpdate = parseInt(
      document.getElementById("editIndexWomen").value
    );
    women[indexToUpdate].name = newName;
    women[indexToUpdate].image = newImage;
    women[indexToUpdate].price = newPrice;
    women[indexToUpdate].quantity = newQuantity;
    women[indexToUpdate].detail = newDetail;

    document.getElementById("editFormWomen").style.display = "none";
    Women();
  }
  function DetailProductMan(index) {
    var product;
  
    product = man[index];
  
    // Tạo HTML hiển thị thông tin chi tiết sản phẩm
    var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";
  
    html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
    html += "<p><strong>Detail:</strong> " + product.detail + "</p>";
  
    // Hiển thị thông tin chi tiết trong một modal hoặc phần tử khác
    var modalElement = document.getElementById("modal");
    modalElement.innerHTML = html;
    modalElement.style.display = "block";
  }
  function DetailProductWomen(index) {
    var product;
  
    product = women[index];
  
    // Tạo HTML hiển thị thông tin chi tiết sản phẩm
    var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";
  
    html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
    html += "<p><strong>Detail:</strong> " + product.detail + "</p>";
  
    // Hiển thị thông tin chi tiết trong một modal hoặc phần tử khác
    var modalElement = document.getElementById("modal");
    modalElement.innerHTML = html;
    modalElement.style.display = "block";
  }
  function confirmDeleteFromMan(index) {

    if (confirm("Confirm removal from Man list by ID: " + man[index].id + "?")) {
      man.splice(index, 1);
      Man();
    }
  }
  function confirmDeleteFromWomen(index) {
    if (confirm("Confirm removal from Women list by ID: " + women[index].id + "?")) {
      women.splice(index, 1);
      Women();
    }
  }
  
  
  function search() {
    var keyword = document.getElementById("searchInput").value;
    searchProduct(keyword);
  }
  
  function searchProduct(keyword) {
    var searchResults = [];
    for (var i = 0; i < man.length; i++) {
      if (man[i].name.toLowerCase().includes(keyword.toLowerCase())) {
        searchResults.push(man[i]);
      }
    }
    for (var i = 0; i < women.length; i++) {
      if (women[i].name.toLowerCase().includes(keyword.toLowerCase())) {
        searchResults.push(women[i]);
      }
    }
    displaySearchResults(searchResults);
  }
  
  function displaySearchResults(results) {
    var html = "";
    for (var i = 0; i < results.length; i++) {
      html += "<tr>";
      html += "<td>" + results[i].id + "</td>";
      html += "<td>" + results[i].name + "</td>";
      html += "<td><img src='" + results[i].image + "' style='height:50px;width:50px;'></td>";
      html += "<td>" + results[i].price + "</td>";
      html += "<td>" + results[i].quantity + "</td>";
      html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
      html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
      html += "<td><button class='detail-btn' onclick='editProduct(" + i + ")'>Detail</button></td>";
      html += "</tr>";
    }
    document.getElementById("tbl").innerHTML = html;
  }
  
  
  function showAllProducts() {
    displaySearchResults([...man, ...women]); 
}