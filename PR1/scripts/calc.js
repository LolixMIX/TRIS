"use strict";
// Площадь комнаты
function RoomArea(lengthWall, wightWall, hight) {
    return (lengthWall + wightWall) * 2 * hight;
}
// Периметр комнаты
function RoomPerimeter(lengthWall, wightWall) {
    return (lengthWall + wightWall) * 2;
}
// Площадь обоев
function WallpaperArea(wightWallpaper, lengthWallpaper) {
    return wightWallpaper * lengthWallpaper;
}
// Кол-во обоев на комнату
function NumberOfRolls(rollArea, roomArea) {
    return Math.ceil(roomArea / rollArea);
}
function Cost(quantity, price) {
    return quantity * price;
}
// Кол-во литров краски
function NumberOfPaints(paintСonsumption, roomArea) {
    return Math.floor(roomArea * paintСonsumption);
}
document.addEventListener("DOMContentLoaded", () => {
    const lengthWallInput = document.getElementById('lengthWall');
    const widthWallInput = document.getElementById('widthWall');
    const hightInput = document.getElementById('hight');
    const typeOfWork = document.getElementById('typeOfWork');
    const widthtWallpaperInput = document.getElementById('widthtWallpaper');
    const lengthWallpaperInput = document.getElementById('lengthWallpaper');
    const priceWallpaperInput = document.getElementById('priceWallpaper');
    const paintСonsumptionInput = document.getElementById('paintСonsumption');
    const pricePaintsInput = document.getElementById('pricePaints');
    const resultDiv = document.getElementById("result");
    const perimeterSpan = document.getElementById('perimeter');
    const areaSpan = document.getElementById('area');
    const quantitySpan = document.getElementById('quantity');
    const costSpan = document.getElementById('cost');
    const wallpaperDiv = document.getElementById("wallpaper");
    const paintsDiv = document.getElementById("paints");
    const calcButton = document.getElementById("calcButton");
    console.log(typeOfWork, wallpaperDiv, paintsDiv);
    if (typeOfWork && wallpaperDiv && paintsDiv) {
        typeOfWork.addEventListener("change", function () {
            const selectedValue = typeOfWork.value;
            wallpaperDiv.style.display = "none";
            paintsDiv.style.display = "none";
            if (selectedValue === "Обои") {
                wallpaperDiv.style.display = "block";
            }
            else if (selectedValue === "Краска") {
                paintsDiv.style.display = "block";
            }
        });
    }
    calcButton.addEventListener("click", function () {
        try {
            const roomPerimeter = 2 * (parseInt(lengthWallInput.value) + parseInt(widthWallInput.value));
            const roomArea = roomPerimeter * parseInt(hightInput.value);
            if (typeOfWork.value === "Обои") {
                const wallpaperArea = WallpaperArea(parseInt(widthtWallpaperInput.value), parseInt(lengthWallpaperInput.value));
                const quantityWallpaper = NumberOfRolls(wallpaperArea, roomArea);
                const costWallpaper = Cost(quantityWallpaper, parseInt(priceWallpaperInput.value));
                perimeterSpan.textContent = roomPerimeter.toString();
                areaSpan.textContent = roomArea.toString();
                quantitySpan.textContent = quantityWallpaper.toString();
                costSpan.textContent = costWallpaper.toFixed(2);
                resultDiv.style.display = "block";
            }
            else if (typeOfWork.value === "Краска") {
                const quantityPaints = NumberOfPaints(parseFloat(paintСonsumptionInput.value), roomArea);
                const costPaints = Cost(quantityPaints, parseInt(pricePaintsInput.value));
                perimeterSpan.textContent = roomPerimeter.toString();
                areaSpan.textContent = roomArea.toString();
                quantitySpan.textContent = quantityPaints.toString();
                costSpan.textContent = costPaints.toFixed(2);
                resultDiv.style.display = "block";
            }
        }
        catch (error) {
            console.log(error);
        }
    });
});
