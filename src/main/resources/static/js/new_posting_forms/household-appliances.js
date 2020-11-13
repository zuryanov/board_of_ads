let postingForm = document.getElementById('visibleElement2');
let saveButton = document.getElementById('saveButton');
let frontName = '';
let postPhotos;

async function sentHouseholdAppliancesPosting(selectedCategoryId) {
    let url = '/new/householdAppliances/' + selectedCategoryId;
    //postPhotos = document.getElementById('photos').files;
    //document.getElementById('uploadPhotos').setAttribute('src', '/images/upload-photo.svg');

    /*alert(`File name: ${photos[0].name}`); // например, my.png
    alert(`File name: ${photos[1].name}`); // например, my.png
    alert(`File name: ${photos[2].name}`); // например, my.png*/
    console.log('title = ' + window.postTitle.value);
    console.log('postState = ' + document.querySelector('input[name="state"]:checked').value);
    console.log('postType = ' + window.postType.value);
    console.log('postDescription = ' + window.postDescription.value);
    console.log('postPrice = ' + window.postPrice.value);
    console.log('postLinkYouTube = ' + window.postLinkYouTube.value);
    console.log('inputAddress = ' + window.inputAddress.value);
    console.log('inputEmail = ' + window.inputEmail.value);
    console.log('inputPhone = ' + window.inputPhone.value);
    console.log('wayOfCommunication = ' + document.querySelector('input[name="communication"]:checked').value,);

    let body = {
        title: window.postTitle.value,
        state: document.querySelector('input[name="state"]:checked').value,
        type: window.postType.value,
        description: window.postDescription.value,
        price: window.postPrice.value,
        linkYouTube: window.postLinkYouTube.value,
        meetingAddress: window.inputAddress.value,
        contactEmail: window.inputEmail.value,
        contact: window.inputPhone.value,
        communicationType: document.querySelector('input[name="communication"]:checked').value,
    };
    //await sendPosting(body, url);
}

async function getHouseholdAppliancesForm(frontName, selectedCategoryId) {
    this.frontName = frontName;
    saveButton.onclick = () => sentHouseholdAppliancesPosting(selectedCategoryId);

    postingForm.innerHTML = '<div id="parameters" class="main-container">\n' +
        '        <div class="category-head-container">\n' +
        '            <div class="category-head-text">Параметры</div>\n' +
        '        </div>\n' +
        '        <div>\n' +
        '            <form id="parametersForm">\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postTitle" class="col-sm-2 col-form-label">Название объявления</label>\n' +
        '                    <div class="col-sm-6">\n' +
        '                        <input  id="postTitle" maxlength="100" type="text" class="form-control form-control-sm">\n' +
        '                        <p class="text-muted" data-toggle="tooltip" data-placement="top">Например, «Диван-кровать Икеа» или «Холодильник Бирюса 110»</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postState" class="col-sm-2 col-form-label">Состояние</label>\n' +
        '                    <div class="col-sm-10">\n' +
        '                        <div id="postState" class="btn-group btn-group-toggle" data-toggle="buttons">\n' +
        '                            <label class="btn btn-sm btn-outline-secondary">\n' +
        '                                <input type="radio" name="state" id="noInUsage" value="Новое">Новое' +
        '                            </label>\n' +
        '                            <label class="btn btn-sm btn-outline-secondary">\n' +
        '                                <input type="radio" name="state" id="pastInUsage" value="Б/у">Б/у' +
        '                            </label>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postType" class="col-sm-2 col-form-label">Вид объявления</label>\n' +
        '                    <div class="col-sm-3">\n' +
        '                        <select id="postType" name="postType" class="custom-select custom-select-sm" required>\n' +
        '                            <option value="Продаю своё">Продаю своё</option>\n' +
        '                            <option value="Товар приобретён на продажу">Товар приобретён на продажу</option>\n' +
        '                            <option value="Товар от производителя">Товар от производителя</option>\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postDescription" class="col-sm-2 col-form-label">Описание объявления</label>\n' +
        '                    <div class="col-sm-6">\n' +
        '                        <textarea id="postDescription" name="postDescription" rows="6" maxlength="5000" style="height: 130px;" class="form-control"></textarea>\n' +
        '                        <p class="text-muted">Не указывайте в описании телефон и e-mail — для этого есть отдельные поля</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postPrice" class="col-sm-2 col-form-label">Цена</label>\n' +
        '                    <div class="col-sm-2 d-flex">\n' +
        '                        <input id="postPrice" inputmode="numeric" placeholder="₽" type="text" class="form-control form-control-sm" value="">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postPhotos" class="col-sm-2 col-form-label">Фотографии</label>\n' +
        '\n' +
        '                    <div class="col-sm-2 d-flex">\n' +
        '                        <label class="photo-upload" data-marker="add">\n' +
        '                            <input id="postPhotos" type="file" value="" multiple style="display: none" accept="image/gif,image/png,image/jpeg,image/pjpeg" data-marker="add/input">\n' +
        '                            <div id="uploadPhotos"></div>' +
        '                        </label>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="form-group row">\n' +
        '                    <label for="postLinkYouTube" class="col-sm-2 col-form-label">Видео c YouTube</label>\n' +
        '                    <div class="col-sm-10">\n' +
        '                        <input  id="postLinkYouTube" type="url" class="form-control form-control-sm" placeholder="Например: https://www.youtube.com/watch?v=qPeVoi6OmRc">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>\n' +
        '        </div>\n' +
        '    </div>'
}