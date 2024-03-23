$(document).ready(function () {
    let owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    let fakeList = [{ id: 1, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }, { id: 2, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }, { id: 1, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }, { id: 1, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }, { id: 1, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }, { id: 1, img: 'https://vnn-imgs-f.vgcloud.vn/2019/10/04/10/bo-anh-ky-yeu-trong-treo-chia-tay-tuoi-sinh-vien-cua-a-hau-bui-phuong-nga.jpg', title: 'Đỗ Thị Thúy', date: '20/03/2001' }]
    const check = (title) => {
        console.log(title)
        if (title.length > 30) {

            return title.slice(0, 30) + "..."
        }
        return title
    }
    for (let index = 0; index < fakeList.length; index++) {

        $(".document-list").append(`<div class="document-item">
        <img src=${fakeList[index].img} alt="" class="document-img">
    <div class="document-body">
        <p class="document-time">${fakeList[index].date}</p>
        <b><p class="document-detail">${check(fakeList[index].title)}</p></b>
       
    </div>
    <button  class="btn-view">View</button>
</div>`)

    }

});