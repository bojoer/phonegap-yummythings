//
//  NavigationBarController.h
//  YummyThings
//
//  Created by Saulius on 04/05/2013.
//
//

#import <UIKit/UIKit.h>

@protocol NavigationBarDelegate <NSObject>
-(void)leftButtonTapped;
-(void)rightButtonTapped;
@end


@interface NavigationBarController : UIViewController

@property (retain, nonatomic) IBOutlet UINavigationItem *navItem;
@property (retain, nonatomic) IBOutlet UIBarButtonItem *leftButton;
@property (retain, nonatomic) IBOutlet UIBarButtonItem *rightButton;
@property (nonatomic, retain) id<NavigationBarDelegate> delegate;


@end
