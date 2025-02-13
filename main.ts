//% color="#AA278D"
namespace gesture {


    /**
     * Show icon image on gesture.
     */
    //% block
    export function showIconImageOnGesture(gesture: Gesture, icon: IconNames) {
        if (input.isGesture(gesture)) {
            basic.showIcon(IconNames.Heart)
            basic.pause(1000)
            basic.clearScreen()
            basic.pause(1000)
        }
    }
}
