//
//  NavigationBar.h
//  PhoneGap iOS Native Navigation Bar plugin
//  Code influenced by NativeControls plugin (Jesse MacFadyen, MIT licensed).
//  Also by code from Hiedi Utley https://github.com/hutley/HelloPhoneGap1.0/ AndiDog: https://github.com/AndiDog/phonegap-ios-navigationbar-plugin and zSprawl https://github.com/zSprawl/NativeControls/
//
//  Customised and adopted by Saulius Zukauskas @sauliuz
//  PopularOwl.com 04/05/2013.
//


#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <UIKit/UINavigationBar.h>

// For older versions of Cordova, you may have to use: #import "CDVPlugin.h"
#import <Cordova/CDVPlugin.h>
#import "NavigationBarController.h"

@interface NavigationBar : CDVPlugin <NavigationBarDelegate> {
    
    UINavigationBar * navBar;
    NavigationBarController * navBarController;
    CGFloat navBarHeight;
    CGFloat tabBarHeight;
    
}

@property (nonatomic, retain) NavigationBarController *navBarController;

- (void)create:(CDVInvokedUrlCommand*)command;
- (void)setTitle:(CDVInvokedUrlCommand*)command;
- (void)setLogo:(CDVInvokedUrlCommand*)command;
- (void)show:(CDVInvokedUrlCommand*)command;
- (void)hide:(CDVInvokedUrlCommand*)command;
- (void)init:(CDVInvokedUrlCommand*)command;
- (void)setupLeftButton:(CDVInvokedUrlCommand*)command;
- (void)setupRightButton:(CDVInvokedUrlCommand*)command;
- (void)leftButtonTapped;
- (void)rightButtonTapped;

- (void)setLeftButtonEnabled:(CDVInvokedUrlCommand*)command;
- (void)setLeftButtonTint:(CDVInvokedUrlCommand*)command;
- (void)setLeftButtonTitle:(CDVInvokedUrlCommand*)command;
- (void)showLeftButton:(CDVInvokedUrlCommand*)command;
- (void)hideLeftButton:(CDVInvokedUrlCommand*)command;

- (void)setRightButtonEnabled:(CDVInvokedUrlCommand*)command;
- (void)setRightButtonTint:(CDVInvokedUrlCommand*)command;
- (void)setRightButtonTitle:(CDVInvokedUrlCommand*)command;
- (void)showRightButton:(CDVInvokedUrlCommand*)command;
- (void)hideRightButton:(CDVInvokedUrlCommand*)command;

@end
