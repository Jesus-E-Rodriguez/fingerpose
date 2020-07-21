import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


const gestureDescription = new GestureDescription('thumbs right');

gestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.75);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Thumb, 2);

export default gestureDescription;
