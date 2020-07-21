import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs down gesture 👍
const gestureDescription = new GestureDescription('thumbs down');

// thumb:
// - not curled
// - vertical down (best) or diagonal up left / right
gestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Thumb, 2);

export default gestureDescription;
