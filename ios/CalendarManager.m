//
//  CalendarManager.m
//  SalesRN
//
//  Created by Xuesen Wang on 2017/8/31.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();
//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
//{
//  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
//  NSLog(@"%@+++++%@",name,location);
//  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:name message:location delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"sure", nil];
//  [alert show];
//}

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
  // Date is ready to use!
  RCTLogInfo(@"Pretending to create an event %@ at %@ date %@", name, location,date);
  
}


RCT_EXPORT_METHOD(testDic:(NSDictionary *)dic)
{
  RCTLogInfo(@"%@",dic[@"name"]);
  RCTLogInfo(@"%@",dic[@"age"]);
}

RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *event = @[@"123",@"456"];
  callback(@[[NSNull null],event]);
}

- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}




@end
