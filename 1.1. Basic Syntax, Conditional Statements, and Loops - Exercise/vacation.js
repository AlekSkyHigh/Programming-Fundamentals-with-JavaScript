function vacation(group, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = 8.45 * group;
            } else if (day === "Saturday") {
                price = 9.80 * group;
            } else if (day === "Sunday") {
                price = 10.46 * group
            }

            if (group >= 30) {
                price = price * 0.85;
            }
            break;

        case "Business":

            if (group >= 100) {
                group = group - 10;
            }

            if (day === "Friday") {
                price = 10.90 * group;
            } else if (day === "Saturday") {
                price = 15.60 * group;
            } else if (day === "Sunday") {
                price = 16 * group
            }
            break;

        case "Regular":
            if (day === "Friday") {
                price = 15 * group;
            } else if (day === "Saturday") {
                price = 20 * group;
            } else if (day === "Sunday") {
                price = 22.50 * group
            }

            if (group >= 10 && group <= 20) {
                price = price * 0.95
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")
