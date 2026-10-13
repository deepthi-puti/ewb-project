
console.log("--- Initializing Inventory System ---");


const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

const inputName = prompt("Enter the new product name:");
const inputPrice = prompt("Enter the product price:");

if (
    inputName === null ||
    inputName.trim() === "" ||
    inputPrice === null ||
    inputPrice.trim() === ""
) {
    console.log("Error: Product name and price are required.");
} else {
    const productName = inputName.trim();
    const productPrice = Number(inputPrice);
    
    if (!Number.isFinite(productPrice) || productPrice <= 0) {
        console.log("Error: Enter a valid price greater than zero.");
    } else {
        inventory.push({
            name: productName,
            price: productPrice
        });
        
        console.log(
            `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
        );
        
        function getCategory(price) {
            if (price < 50) {
                return "Budget";
            } else if (price < 200) {
                return "Standard";
            } else {
                return "Premium";
            }
        }
        
        function getCategoryBadge(price) {
            switch (getCategory(price)) {
                case "Budget":
                    return "Budget";
                    case "Standard":
                        return "Standard";
                        case "Premium":
                            return "Premium";
                            default:
                                return "Unknown";
                            }
                        }
                        
                        console.log("\n--- Processing Inventory Roster (forEach) ---");
                        
                        inventory.forEach(function(product) {
                            console.log(
                                `* Item: ${product.name} ($${product.price}) -> Category: ${getCategoryBadge(product.price)}`
                            );
                        });
                        
                        const calculateTotal = (items) => {
                            let total = 0;
                            
                            for (const item of items) {
                                if (item.price <= 0) {
                                    continue;
                                }
                                
                                total += item.price;
                            }
                            
                            return total;
                        };
                        
                        const affordableProducts = inventory.filter(function(product) {
                            return product.price < 200;
                        });
                        
                        const reportList = inventory.map(function(product) {
                            return `${product.name.toUpperCase()}: $${product.price}`;
                        });
                        
                        console.log("\n--- Financial Analytics ---");
                        
                        console.log(
                            "Total Inventory Value: $" + calculateTotal(inventory)
                        );
                        
                        console.log(
                            "Filtered Affordable Items (Under $200):",
                            JSON.stringify(affordableProducts.map(product => product.name))
                        );
                        
                        console.log(
                            "Formatted Report List:",
                            JSON.stringify(reportList)
                        );
                    }
                }
                