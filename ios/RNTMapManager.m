//
//  RNTMapManager.m
//  SalesRN
//
//  Created by Xuesen Wang on 2017/8/31.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"
#import <MapKit/MapKit.h>
#import <React/RCTViewManager.h>

@implementation RNTMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

- (UIView *)view {
  return [[MKMapView alloc] init];
}

@end
