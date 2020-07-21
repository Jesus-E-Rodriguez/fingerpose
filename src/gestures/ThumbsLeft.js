import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const gestureDescription = new GestureDescription('thumbs left');

gestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.75);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Thumb, 2);

export default gestureDescription;
