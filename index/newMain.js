class setPC {
    constructor(name, cpu, videoCard, price, category, contact, photoPath) {
        this.name = name;
        this.cpu = cpu;
        this.videoCard = videoCard;
        this.price = price;
        this.category = category;
        this.contact = contact;
        this.photoPath = photoPath;
    }
}

products = [
    new setPC (
        "Gaming Plus Ultra Daily Deal",
        "Intel® Core™ i9-9900K",
        "NVIDIA GeForce RTX 2080 Ti - 11GB GDDR6",
        "2049$",
        "Gaming PC",
        "+79099310811",
        "src/PC-I9(0).png"
    ),

    new setPC (
        "Intel Creator Daily Deal",
        "Intel® Core™ i7-9700K",
        "NVIDIA GeForce RTX 2080 SUPER - 8GB GDDR6",
        "1709$",
        "Gaming PC",
        "+79034329812",
        "src/PC-I7(1).png"
    ),

    new setPC (
        "Intel Z390 mATX Gaming PC EX",
        "Intel® Core™ i7-9700K",
        "NVIDIA GeForce RTX 2070 SUPER - 8GB GDDR6",
        "1699$",
        "Gaming PC",
        "+79023456789",
        "src/PC-I7(2).png"
    ),

    new setPC (
        "Intel Z390 Elixir",
        "Intel® Core™ i9-9900K",
        "NVIDIA GeForce RTX 2080 Ti - 11GB GDDR6",
        "3499$",
        "Gaming PC",
        "+79016789012",
        "src/PC-I9(3).png"
    ),

    new setPC (
        "Apple iMac 21.5",
        "Intel® Core™ i5",
        "Intel® Iris Plus Graphics 640",
        "1234$",
        "Monoblocks",
        "+79097853456",
        "src/PC-IMAC(4).png"
    ),

    new setPC (
        "Lenovo IdeaCentre AIO A340-22",  
        "Intel® Pentium™ 5405U",
        "Intel UHD Graphics 610",
        "324$",
        "Monoblocks",
        "+79093224567",
        "src/PC-MONO(5).png"
    ),

    new setPC ( 
        "Lenovo IdeaCentre A540",
        "Intel® Core™ i7-8700T",
        "AMD Radeon™ RX 560X",
        "1034$",
        "Monoblocks",
        "+79052347890",
        "src/PC-MONO(6).png"
    ),

    new setPC (
        "ASUS TUF505DU-KB71 Gaming Laptop",
        "AMD Ryzen 7 3750H",
        "NVIDIA GeForce GTX 1660 Ti 6GB GDDR6",
        "946$",
        "Laptop",
        "+79046572165",
        "src/PC-MoLAP(7).png"
    ),

    new setPC ( 
        "MSI GF65 THIN 9SEXR-250 Gaming Laptop",
        "Intel® Core™ i7-9750H",
        "NVIDIA GeForce RTX 2060 6GB GDDR6",
        "1149$",
        "Laptop",
        "+79019043412",
        "src/PC-MoLAP(8).png"
    ),

    new setPC (
        "Chimera NH58DDW (NP7858DW) Gaming Laptop",
        "Intel® Core™ i7-10875H",
        "NVIDIA GeForce RTX 2060 6GB GDDR6",
        "1399$",
        "Laptop",
        "+79017890934",
        "src/PC-MoLap(9).png"
    )
]

function load() {
    let board = document.querySelector("#boardContainer");
    let innerText = "";

    products.forEach(item => {
        innerText +=
        `<div class = "board">
            <div class="column">
                <img class="board-img" src="${item.photoPath}" alt = "">
            </div>
            <div class="column">
                <div class = "board-navigation-text"><center>${item.name}</center></div>
                <div class = "board-navigation-text">CPU: ${item.cpu}</div>
                <div class = "board-navigation-text">GPU: ${item.videoCard}</div>
                <div class = "board-navigation-text">Price: ${item.price}</div>
                <div class = "board-navigation-text">Category: ${item.category}</div>
                <div class = "board-navigation-text">Contact: ${item.contact}</div>
            </div>
        </div>`
    });
    board.innerHTML = innerText;
}

document.addEventListener('DOMContentLoaded', load);
