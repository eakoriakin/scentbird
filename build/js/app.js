var Header = React.createClass({
    render: function () {
        return (
            <div className="header"></div>
        );
    }
});

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer"></div>
        );
    }
});

var Perfume = React.createClass({
    render: function () {
        return (
            <div className="perfume">
                <div className="container">
                    <div className="perfume-text">Free perfume for you and your friends</div>
                    <div className="perfume-text">
                    Give your friends a FREE perfume.
                        <br/>
                    Get a FREE perfume for every friend that subscribes.
                    </div>
                </div>
                <div className="container">
                    <div className="perfume-images">
                        <div className="perfume-col perfume-col-1">
                            <img src="images/tell-friends.png" className="img-responsive"
                            alt="Tell your friends email, facebook or link"/>
                        </div>
                        <div className="perfume-col perfume-col-arrow-3">
                            <img src="images/arrow-3.png" className="img-responsive" alt="Arrow"/>
                        </div>
                        <div className="perfume-col perfume-col-arrow-1">
                            <img src="images/arrow-1.png" className="img-responsive" alt="Arrow"/>
                        </div>
                        <div className="perfume-col perfume-col-2">
                            <div className="perfume-friends-text">
                                <div>Tell your friends</div>
                                <div>email, facebook or link</div>
                            </div>
                        </div>
                        <div className="perfume-col perfume-col-3">
                            <img src="images/free-perfume.png" className="img-responsive"
                            alt="Your friends get free perfume, make them happy`"/>
                        </div>
                        <div className="perfume-col perfume-col-arrow-2">
                            <img src="images/arrow-2.png" className="img-responsive" alt="Arrow"/>
                        </div>
                        <div className="perfume-col perfume-col-4">
                            <div className="perfume-friends-text">
                                <div>Your friends get free perfume</div>
                                <div>make them happy</div>
                            </div>
                        </div>
                        <div className="perfume-col perfume-col-5">
                            <img src="images/free-month.png" className="img-responsive"
                            alt="You get a FREE month for every friend that subscribe"/>
                        </div>
                        <div className="perfume-col perfume-col-6">
                            <div className="perfume-friends-text">
                                <div>You get a FREE month</div>
                                <div>for every friend that subscribes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Adv = React.createClass({
    render: function () {
        return (
            <div className="adv">
                <div className="adv-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-8 col-sm-push-4">
                                <div className="adv-text">
                                    <b>Top 3 Referrers</b>
                                of every week receive 3 FREE Scentbird Colored Cases each
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-sm-pull-8 text-center">
                                <img src="images/cases.png" alt=" Colored Cases"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Email = React.createClass({
    getInitialState: function () {
        return {
            emailsString: ''
        };
    },
    emailsStringChange: function (event) {
        this.setState({ emailsString: event.target.value });
    },
    send: function () {
        // Now emails can be processed and sent to the server.
        console.log(this.state.emailsString);
    },
    render: function () {
        return (
            <div className="email">
                <div className="container">
                    <div className="input-group">
                        <input type="text" className="form-control input-lg" placeholder="Add friends’ email addresses"
                        value={this.state.emailsString}
                        onChange={this.emailsStringChange}
                        />
                        <span className="input-group-btn">
                            <button className="btn btn-default btn-lg btn-pink" type="button"
                            onClick={this.send}>
                            SEND
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
});

var Share = React.createClass({
    render: function () {
        return (
            <div className="share">
                <div className="container share-title">
                The more your share the better your chances to get free perfumes
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="fb-share-button"
                            data-href="http://www.your-domain.com/your-page.html"
                            data-layout="button_count">
                                <i className="fa fa-facebook"></i>
                            Share
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="google-button">
                                <i className="fa fa-google"></i>
                            Mail
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="copy-button">
                                <i className="fa fa-link"></i>
                            Link Copied
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Results = React.createClass({
    getInitialState: function () {
        return {
            friendsSubscribed: 1,
            perfumesEarned: 1
        };
    },
    render: function () {
        return (
            <div className="results">
                <div className="container">
                    <div className="results-title">Watch your results</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 results-text">Friends subscribed:</div>
                        <div className="col-xs-6 results-text">Perfumes earned:</div>
                    </div>
                    <div className="row vertical-align">
                        <div className="col-xs-4 col-sm-3">
                            <img src="images/friends-subscribed.png" className="img-responsive" alt="Friends subscribed"/>
                        </div>
                        <div className="col-xs-2 col-sm-3">
                            <div className="results-count">{this.state.friendsSubscribed}</div>
                        </div>
                        <div className="col-xs-4 col-sm-3">
                            <img src="images/perfumes-earned.png" className="img-responsive" alt="Perfumes earned"/>
                        </div>
                        <div className="col-xs-2 col-sm-3">
                            <div className="results-count">{this.state.perfumesEarned}</div>
                        </div>
                    </div>
                    <div className="separator"></div>
                </div>
            </div>
        );
    }
});

var Friends = React.createClass({
    getInitialState: function () {
        return {
            friends: []
        };
    },
    getFriends: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ friends: data });
            }.bind(this),
            error: function (xhr, status, error) {
                console.error(this.props.url, status, error.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.getFriends();
    },
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },
    render: function () {
        var friendIndex = 0,
            renderGirlIcon = function (friend) {
                if (friend.hasGirl) {
                    return (
                        <div className="icon icon-girl"></div>
                    );
                }

                return '';
            },
            renderCrownIcon = function (friend) {
                if (friend.hasCrown) {
                    return (
                        <div className="icon icon-crown"></div>
                    );
                }

                return '';
            },
            friendsItems = this.state.friends.map(function (friend) {
                friendIndex++;

                return (
                    <tr key={friend.id}>
                        <td>{friendIndex}</td>
                        <td>{friend.name}</td>
                        <td>
                            {renderGirlIcon(friend)}
                        </td>
                        <td>
                            {renderCrownIcon(friend)}
                        </td>
                        <td>{friend.referralsCount}</td>
                    </tr>
                );
            });

        return (
            <div className="friends">
                <div className="container">
                    <div className="friends-inner">
                        <div className="friends-title">Leaderboard</div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="friends-short">#</span>
                                        <span className="friends-full">Position</span>
                                    </th>
                                    <th>Name</th>
                                    <th colSpan="3">Referrals</th>
                                </tr>
                            </thead>
                            <tbody>
                                {friendsItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <Header />
                <Perfume />
                <Adv />
                <Email />
                <Share />
                <Results />
                <Friends url="/api/friends" />
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);