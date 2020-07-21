import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const gestureDescription = new GestureDescription('point left');

// thumb:
// - not curled
// - vertical down (best) or diagonal up left / right
gestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Index, 2);

export default gestureDescription;
