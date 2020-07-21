import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


const gestureDescription = new GestureDescription('point down');

gestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.5);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  gestureDescription.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  gestureDescription.addDirection(finger, FingerDirection.VerticalDown, 0.5);
  gestureDescription.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.5);
  gestureDescription.addDirection(finger, FingerDirection.DiagonalDownRight, 0.5);
}

gestureDescription.setWeight(Finger.Index, 2);

export default gestureDescription;
