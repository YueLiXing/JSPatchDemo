//
//  ViewController.m
//  JSPatchDemo
//
//  Created by yuelixing on 16/6/27.
//  Copyright © 2016年 Tutu. All rights reserved.
//

#import "ViewController.h"
#import "Audiences.h"
#import "MJExtension.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [self test];
    [self temp];
}

- (void)test {
    NSLog(@"123");
}

- (void)temp {
    NSDictionary * dict = @{
                            @"listflag": @1,
                            @"user": @{
                                    @"name": @"name",
                                    @"uid": @100
                                    }
                            };
    Audiences * var = [Audiences mj_objectWithKeyValues:dict];
    [var mj_setKeyValues:dict];
    NSLog(@"%@", var.user.name);
}

- (void)asdqwe {
    [NSNumber numberWithLong:10];
}


@end
