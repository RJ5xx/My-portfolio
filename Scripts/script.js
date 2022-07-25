swal("It\'s my birthday on the 29th! 🎂", {
    buttons: {
        congratulate: {
            text: "Congratulate me! 🎉",
            value: "congratulate",
        },
        donate: {
            text: "Donate to me! 💸"
        }
    },
}).then((value) => {
    switch (value) {
        case "congratulate":
            swal("Cool!", "Thanks for congratulating me! 🎉", "success");
            break;

        case "donate":
            swal("Here is a link for you to buy me some cake! https://paypal.me/neutral75 💸");
            break;
    }
});