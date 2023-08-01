window.SanPhamController = function ($scope, $http) {
  $scope.listSanPham = [];
  $http.get("http://localhost:3000/SanPham").then(function (response) {
    $scope.listSanPham = response.data;
  });
  $scope.chitietSanPham = [];
  $http.get("http://localhost:3000/chitet").then(function (response) {
    $scope.chitietSanPham = response.data;
  });

  $scope.addSP = function () {
    $http
      .post("http://localhost:3000/SanPham", {
        id: $scope.id,
        image: $scope.image,
        mota: $scope.mota,
        giagiam: $scope.giagiam,
        giaban: $scope.giaban,
        phantramgiam: $scope.phantramgiam,
      })
      .then(function (response) {
        if (response.status === 201) {
          alert("Thêm sản phẩm thành công !");
        }
      });
  };

  $scope.detailSP = function (id) {
    $http.get("http://localhost:3000/SanPham/" + id).then(function (response) {
      $scope.id = response.data.id;
      $scope.image = response.data.image;
      $scope.mota = response.data.mota;
      $scope.giagiam = response.data.giagiam;
      $scope.giaban = response.data.giaban;
      $scope.phantramgiam = response.data.phantramgiam;
    });

    $scope.deleteSP = function (id) {
      $http
        .delete("http://localhost:3000/SanPham/" + id)
        .then(function (response) {
          alert("Xóa thành công!");
        });
    };
  };

  $scope.updateSP = function () {
    $http
      .put("http://localhost:3000/SanPham/" + $scope.id, {
        id: $scope.id,
        image: $scope.image,
        mota: $scope.mota,
        giagiam: $scope.giagiam,
        giaban: $scope.giaban,
        phantramgiam: $scope.phantramgiam,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Sửa sản phẩm thành công !");
        }
      });
  };

  $scope.$on("$routeChangeSuccess", function () {
    if ($routeParams.id) {
      $http
        .get("http://localhost:3000/SanPham/"  + $routeParams.id)
        .then(function (response) {
          $scope.sanpham = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
};
