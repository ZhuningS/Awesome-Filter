$objc("NSBundle").$bundleWithPath("/System/Library/PrivateFrameworks/DocumentCamera.framework").$load();

$define({
  type: "ICDocCamExtractedDocumentViewController",
  events: {
    "viewDidLoad": () => {
      self.$ORIGviewDidLoad();
      let tintColor = $color("tint").runtimeValue();
      self.$recropButtonItem().$setTintColor(tintColor);
      self.$compactFilterButtonItem().$setTintColor(tintColor);
      self.$rotateButtonItem().$setTintColor(tintColor);
      self.$trashButtonItem().$setTintColor(tintColor);
    }
  }
});

$define({
  type: "DocCamVC: DCDocumentCameraViewController_InProcess",
  events: {
    "documentCameraControllerDidCancel": sender => dismiss(sender),
    "documentCameraController:didFinishWithDocInfoCollection:imageCache:warnUser:": (sender, info, cache) => {
      let document = $objc("DCScannedDocument").$alloc().$initWithDocInfoCollection_imageCache(info, cache);
      let count = document.$docInfos().$count();
      let images = [];
      for (let idx=0; idx<count; ++idx) {
        let image = document.$imageOfPageAtIndex(idx);
        images.push(image.rawValue());
      }
      dismiss(sender, () => $share.sheet(images));
    }
  }
});

function dismiss(vc, blk) {
  let handler = blk ? $block("void", blk) : null;
  vc.$dismissViewControllerAnimated_completion(true, handler);
}

function showCamera() {
  let camVC = $objc("DocCamVC").$alloc().$initWithDelegate(null);
  let rootVC = $ui.controller.runtimeValue();
  rootVC.$presentViewController_animated_completion(camVC, true, null);
}

showCamera();
