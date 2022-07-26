swal("It\'s my birthday on the 29th! 🎂", {
    buttons: {
        congratulate: {
            text: "Congratulate me! 🎉",
        },
        donate: {
            text: "Donate to me! 💸"
        }
    },
}).then((value) => {
    switch (value) {
        case "congratulate":
            swal({
                icon: "success",
                title: "Cool! 🎉", 
                text: "Thanks for congratulating me!"
            });
            break;

        case "donate":
            swal({
                icon: "success",
                title: "Thanks! 💸",
                text: "Donate to to me from the link below! https://paypal.me/neutral75"
            });
            break;
    }
});