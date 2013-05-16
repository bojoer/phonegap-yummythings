//
//  NavigationBarController.m
//  YummyThings
//
//  Created by Saulius on 04/05/2013.
//
//

#import "NavigationBarController.h"

@interface NavigationBarController ()

@end

@implementation NavigationBarController


@synthesize navItem;
@synthesize leftButton;
@synthesize rightButton;
@synthesize delegate;



- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    return [self init];
}

- (id) init
{
    self = [super initWithNibName:@"NavigationBarController" bundle:nil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
}


- (void)dealloc {
    [navItem release];
    [leftButton release];
    [rightButton release];
    
    [super dealloc];
}

-(IBAction)leftButtonTapped:(id)sender
{
    [delegate leftButtonTapped];
}
-(IBAction)rightButtonTapped:(id)sender
{
    [delegate rightButtonTapped];
}


@end
