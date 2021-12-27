function insertData(dataStudent, id) {
    document.getElementById(id).insertAdjacentHTML("beforeend", 
        `
        <tr class="rating__item">
          <td>
            <div class="rating__icon-container">
                <img src="${dataStudent.iconSrc}" alt="photo"></img>
            </div> 
            <div class="rating__name">
                <span> ${dataStudent.surname}</span><br>
                <span> ${dataStudent.name}</span>
            </div>
            <div class="rating__description">
                <span> ${dataStudent.homeWorks}</span><br>
                <span> ${dataStudent.mark}</span>
            </div>
          </td>
        </tr>`
    );
}