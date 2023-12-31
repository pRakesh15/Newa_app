import React, { Component } from "react";
import Newsitem from "./Newsitem";
import axios from "axios";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Katie Kilkenny",
      title:
        "Writers Guild Replies to Studios’ Counter Offer: Not “Nearly Enough” - Hollywood Reporter",
      description:
        "The update follows a tense back-and-forth between the union and entertainment companies on Aug. 22 following talks.",
      url: "https://www.hollywoodreporter.com/business/business-news/writers-guild-replies-to-studios-counter-offer-1235573012/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/2023_05-WGA-01.jpg?w=1024",
      publishedAt: "2023-08-24T20:03:45Z",
      content:
        "The Writers Guild of America is sharing its perspective on the progress of contract negotiations with studios and streamers since they restarted on Aug. 11. \r\n“The companies’ counteroffer is neither … [+6645 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jacqueline Howard",
      title:
        "Brain implants can help people with paralysis ‘speak’ through screens faster, more accurately than before, new studies show - CNN",
      description:
        "Dr. Jaimie Henderson had a single wish throughout childhood: for his father to be able to speak with him. Now a scientist and neurosurgeon at Stanford Medicine, Henderson and his colleagues are developing brain implants that might be able to make similar wish…",
      url: "https://www.cnn.com/2023/08/23/health/brain-implants-speech-scn/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230823095111-02-brain-implants-speech.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-24T19:52:00Z",
      content:
        "Dr. Jaimie Henderson had a single wish throughout childhood: for his father to be able to speak with him. Now a scientist and neurosurgeon at Stanford Medicine, Henderson and his colleagues are devel… [+6479 chars]",
    },
    {
      source: {
        id: null,
        name: "Vulture",
      },
      author: "Jason P. Frank",
      title:
        "Below Deck Sailing Yacht's Gary King Accused of Misconduct - Vulture",
      description:
        "Below Deck Sailing Yacht star Gary King has been accused of sexual assault by Samantha Suarez, who says it was swept under the rug by production on season four.",
      url: "http://www.vulture.com/2023/08/below-deck-gary-king-sexual-misconduct.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/101/b85/264721c697a676bb15593b0fb0258c9dba-gary-king.1x.rsocial.w1200.jpg",
      publishedAt: "2023-08-24T19:31:52Z",
      content:
        "Its been a torrid season for Below Deck. On-camera sexual assault resulted in cast members being removed from the show, and, now, a different cast member, Gary King, is being accused of sexual miscon… [+2109 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Sumayya Ismail",
      title:
        "‘A wall of BRICS’: The significance of adding six new members to the bloc - Al Jazeera English",
      description:
        "Argentina, Egypt, Ethiopia, Iran, Saudi Arabia and UAE invited to join the grouping of top emerging economies.",
      url: "https://www.aljazeera.com/news/2023/8/24/analysis-wall-of-brics-the-significance-of-adding-six-new-members",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-23T101005Z_1848209155_RC2MT2A2IB2F_RTRMADP_3_BRICS-SUMMIT-1692848545.jpg?resize=1920%2C1440",
      publishedAt: "2023-08-24T19:28:18Z",
      content:
        "Johannesburg, South Africa The BRICS bloc of top emerging economies have taken a major step in expanding its reach and influence with the announcement that six more nations have been invited join as … [+8344 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Shohei Ohtani injury: Five biggest questions about future of MLB's best player - CBS Sports",
      description:
        "Will Ohtani keep hitting this season? Will he have Tommy John surgery? Here are five burning questions",
      url: "https://www.cbssports.com/mlb/news/shohei-ohtani-injury-five-biggest-questions-about-future-of-mlbs-best-player/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/08/24/f4d32835-b71f-4702-8b82-4a040e2c8680/thumbnail/1200x675/5f26c6043a9a8d13717b371891b1ed14/ohtani-usatsi-1.png",
      publishedAt: "2023-08-24T19:12:00Z",
      content:
        "Angels two-way superstar Shohei Ohtanihas a torn UCL in his right elbow. This news pretty well capped a disaster of a season for the Angels, but it also raises a bunch of questions. In fact, there ar… [+7379 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Kif Leswing",
      title:
        "Nvidia earnings scare away AMD, Intel investors as legacy chipmakers lose ground in AI - CNBC",
      description:
        "In its earnings report on Wednesday, Nvidia said sales this quarter will likely rise 170%, showing the company's dominance in artificial intelligence chips",
      url: "https://www.cnbc.com/2023/08/24/nvidia-earnings-scare-away-amd-intel-investors-as-ai-battle-shapes-up.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107249321-1685630435513-gettyimages-1494623399-0j5a0211_n4plkmvu.jpeg?v=1692903588&w=1920&h=1080",
      publishedAt: "2023-08-24T18:59:48Z",
      content:
        "Developers in the world of artificial intelligence can't get enough of Nvidia's processors. Demand is so strong that the company said late Wednesday that revenue in the current quarter will jump 170%… [+3560 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Emily Shapiro",
      title:
        "Boyfriend arrested in murder of missing North Carolina woman, police say they believe they found remains - ABC News",
      description: "Allisha Watts had been missing since July 16.",
      url: "https://abcnews.go.com/US/boyfriend-arrested-murder-missing-north-carolina-woman-police/story?id=102538208",
      urlToImage:
        "https://s.abcnews.com/images/US/Allisha-Watts-ht-thg-230824_1692901269492_hpMain_16x9_992.jpg",
      publishedAt: "2023-08-24T18:52:03Z",
      content:
        "Authorities said they believe they've found the remains of 39-year-old Allisha Watts, a North Carolina woman who has been missing for over a month.\r\nWatts' boyfriend, James Dunmore, was arrested Thur… [+1502 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: null,
      title: "Mark Meadows surrenders to face Georgia election charges - NPR",
      description:
        "Former White House chief of staff Mark Meadows has turned himself in to face charges as part of the case targeting Donald Trump and his allies for attempting to subvert Georgia's 2020 election.",
      url: "https://www.npr.org/2023/08/24/1195314434/mark-meadows-arrest-georgia-fulton-county",
      urlToImage:
        "https://media.npr.org/assets/img/2023/08/24/mark-meadows_wide-1a1e1e07c600a09ebe3f63b37dc90ed7f6490b53-s1400-c100.png",
      publishedAt: "2023-08-24T18:44:52Z",
      content:
        "For the latest updates on this story, follow NPR's digital live coverage.\r\nFormer White House chief of staff Mark Meadows has turned himself in to face charges as part of the racketeering case target… [+940 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Fulton County prosecutors ask judge to set Oct. 23 trial on Trump racketeering charges - POLITICO",
      description:
        "The expedited trial date does not apply — at least for now — to Donald Trump or any other defendants in the Georgia case.",
      url: "https://www.politico.com/news/2023/08/24/fulton-county-prosecutors-ask-judge-to-set-oct-23-trial-on-trump-racketeering-charges-00112816",
      urlToImage:
        "https://static.politico.com/72/5c/e075a0a7458a9715141fdcefaf45/https-delivery-gettyimages.com/downloads/1612818713",
      publishedAt: "2023-08-24T18:28:27Z",
      content:
        "Willis responded to Chesebros initial motion Thursday by, essentially, agreeing.\r\nWithout waiving any objection as to the sufficiency of Defendant Kenneth John Chesebros filing, the State requests th… [+1115 chars]",
    },
    {
      source: {
        id: null,
        name: "SB Nation",
      },
      author: "James Dator",
      title:
        "HBO BS High review: 10 most shocking revelations from the documentary - SB Nation",
      description: "These details are unbelievable.",
      url: "https://www.sbnation.com/college-football/2023/8/24/23844324/hbo-bishop-sycamore-documentary-bill-belichick-review",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/5JsZAbiNoo03L-ErJnIuswA3XoM=/0x25:1280x695/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24871084/bs_high.png",
      publishedAt: "2023-08-24T18:17:21Z",
      content:
        "Do I look cool? I dont look like a con artist? \r\nRoy Johnson, the architect of Bishop Sycamore sits in a dimly lit room, with dire concern about his appearance to a national audience. Within the firs… [+5109 chars]",
    },
    {
      source: {
        id: null,
        name: "Investor's Business Daily",
      },
      author: "Investor's Business Daily",
      title:
        "Fed Chair Powell At Jackson Hole: The Real Risk For Stocks - Investor's Business Daily",
      description: null,
      url: "https://www.investors.com/news/federal-reserve-chair-powell-at-jackson-hole-heres-the-real-risk-for-the-sp-500/",
      urlToImage: null,
      publishedAt: "2023-08-24T18:06:00Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author:
        "Niha Masih, Leo Sands, Lyric Li, Ellen Francis, Sarah Dadouch, Sammy Westfall",
      title:
        "Prigozhin plane crash live updates: Putin appears to eulogize Wagner chief - The Washington Post - The Washington Post",
      description:
        "Russian President Vladimir Putin appeared to eulogize Wagner Group mercenary chief and ally-turned-rival Yevgeniy Prigozhin, but stopped short of confirming his death.",
      url: "https://www.washingtonpost.com/world/2023/08/24/prigozhin-plane-crash-wagner-russia-live-updates/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/08-24-2023/t_c06e6676d9d1427fa3cd917d843da53d_name_EOF6EW5QLCMYGKVYUG54MWTP6Y.jpg&w=1440",
      publishedAt: "2023-08-24T17:59:58Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "VC Star",
      },
      author: ", Ventura County Star",
      title:
        "Retired Ventura police sergeant named as shooter at O.C. biker bar - VC Star",
      description:
        "Three people were killed in a shooting Wednesday at an Orange County biker bar and the shooter also died, Orange County Sheriff's officials said.",
      url: "https://www.vcstar.com/story/news/2023/08/23/authorities-say-4-people-dead-in-shooting-at-california-biker-bar/70666072007/",
      urlToImage:
        "https://www.gannett-cdn.com/authoring/authoring-images/2023/08/24/PVCS/70670038007-ap-23236603919384.jpg?auto=webp&crop=2670,1510,x0,y135&format=pjpg&width=1200",
      publishedAt: "2023-08-24T17:48:45Z",
      content:
        "TRABUCO CANYON, Calif. (AP) Gunfire at a popular Orange County biker bar killed three people and wounded five others, and the gunman later confirmed as a retired Ventura Police Department sergeant wa… [+3960 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Jay Peters",
      title: "YouTube tests a new hum-to-search feature on Android - The Verge",
      description:
        "Google is testing a new YouTube feature that lets you hum or record a song to search for it. A similar Shazam-like feature was added to the Google mobile app in 2020.",
      url: "https://www.theverge.com/2023/8/24/23844501/youtube-tests-hum-to-search-feature-android-google",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/1L6awTcXjbADLDMFfR9g1r5lzDc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986640/acastro_STK092_04.jpg",
      publishedAt: "2023-08-24T17:31:16Z",
      content:
        "YouTube tests a new hum-to-search feature on Android\r\nYouTube tests a new hum-to-search feature on Android\r\n / YouTube will let you hum or record part of a song to try and figure out what it is.\r\nByJ… [+1744 chars]",
    },
    {
      source: {
        id: null,
        name: "Spectrum News NY1",
      },
      author: "Associated Press",
      title:
        "Mask mandates return in some places as COVID cases rise - Spectrum News NY1",
      description: "Hospitalizations from the virus have doubled in two months",
      url: "https://www.ny1.com/nyc/all-boroughs/health/2023/08/24/mask-mandates-return-in-some-places-as-covid-cases-rise",
      urlToImage:
        "https://s7d2.scene7.com/is/image/TWCNews/covid_masks_AP_20193744613789_NAT_0824",
      publishedAt: "2023-08-24T17:00:00Z",
      content:
        "Mask requirements are making a comeback in some places as COVID-19 hospitalizations are on the rise.\r\nWhat You Need To Know\r\n<ul><li>Mask requirements are making a comeback in some places as COVID-19… [+3858 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Sarah Whitten",
      title:
        "'Barbie' is now the highest-grossing domestic film release in 2023 - CNBC",
      description:
        '"Barbie" is now the highest-grossing film at the domestic box office in 2023, surpassing "The Super Mario Bros. Movie."',
      url: "https://www.cnbc.com/2023/08/24/barbie-is-highest-grossing-domestic-film-release-in-2023.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107276475-1690308883192-Screenshot_2023-07-25_at_21101_PM.png?v=1692894514&w=1920&h=1080",
      publishedAt: "2023-08-24T16:20:58Z",
      content:
        'It\'s a "Barbie" world or at least North America.\r\nThe collaboration among director Greta Gerwig, Mattel and Warner Bros. Discovery topped $575.4 million at the domestic box office Wednesday, making i… [+1686 chars]',
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Lewis Kamb, Evan Bush",
      title:
        "Maui officials didn’t learn from a close brush with Lahaina wildfires in 2018, some say - NBC News",
      description:
        "After wildfires nearly burned through Lahaina in 2018, former Maui Emergency Management administrator Herman Andaya said a far worse disaster had been averted.",
      url: "https://www.nbcnews.com/news/us-news/maui-officials-warned-lahaina-wildfires-2018-critics-rcna101515",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230823-ONETIMEUSE-lahaina-hawaii-2018-wildfire-2018-ac-959p-420d0f.jpg",
      publishedAt: "2023-08-24T16:00:40Z",
      content:
        "Five years ago, after tropical storm-force winds whipped sparks into towering walls of flames on the parched hillsides and fields above Lahaina, Mauis top emergency management official at the time pu… [+9465 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Marlene Lenthang",
      title:
        "'And Just Like That,' Kim Cattrall returns as Samantha to 'Sex and the City' revival - NBC News",
      description:
        'Warning: This article contains "And Just Like That" Season 2 finale spoilers.',
      url: "https://www.nbcnews.com/pop-culture/pop-culture-news/-just-kim-cattrall-returns-samantha-sex-city-revival-rcna101591",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230824-and-just-like-that-Kim-Cattrall-se-137p-c64a3c.jpg",
      publishedAt: "2023-08-24T15:57:38Z",
      content:
        'Warning: This article contains "And Just Like That" Season 2 finale spoilers. \r\nSamantha Jones, the ever-iconic and fan-favorite character from HBO\'s "Sex and The City," made her highly anticipated r… [+3994 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jake Epstein, Nathan Rennolds",
      title:
        "Ukraine says special forces made daring amphibious raid into Crimea - Business Insider",
      description:
        "Kyiv's military intelligence agency said its forces left Crimea without suffering any casualties and published a video of troops hoisting the flag.",
      url: "https://www.businessinsider.com/ukraine-special-forces-daring-amphibious-raid-crimea-raised-flag-russia-2023-8",
      urlToImage:
        "https://i.insider.com/64e7524452bc2d0019910f55?width=1200&format=jpeg",
      publishedAt: "2023-08-24T15:32:00Z",
      content:
        "Ukrainian special forces made an amphibious raid into the occupied Crimean peninsula on Thursday, where they battled Russian troops and planted the country's flag, Kyiv's military intelligence agency… [+5284 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Michael Derby",
      title:
        "Fed's Harker expects no more rate hikes needed this year, in CNBC interview - Reuters",
      description:
        "Two Federal Reserve officials on Thursday tentatively welcomed a jump in bond market yields as something that could complement the U.S. central bank's work to slow the economy and get inflation back to the 2% target, while also noting they see a good chance t…",
      url: "https://www.reuters.com/markets/us/feds-harker-tells-cnbc-he-expects-no-more-rate-cuts-this-year-2023-08-24/",
      urlToImage:
        "https://www.reuters.com/resizer/mwxw1DdnH1tX5VdmvdJgsuczS-k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KC3AXMM7EZL43KKFVZ3RR5RF64.jpg",
      publishedAt: "2023-08-24T15:25:00Z",
      content:
        "NEW YORK, Aug 24 (Reuters) - Two Federal Reserve officials on Thursday tentatively welcomed a jump in bond market yields as something that could complement the U.S. central bank's work to slow the ec… [+4830 chars]",
    },
  ];
  constructor() {
    super();
    // console.log("hello im a construtor form news componet");
    this.state = {
      articles: this.articles,
      loding: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7d583be278ba421fa8a682a5c54e622d&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({ articles: parseData.articles,totalResult:parseData.totalResults });
  }

  hendelPreviousclick=async()=>
  {
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7d583be278ba421fa8a682a5c54e622d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parseData = await data.json();


  this.setState({

    page:this.state.page-1,
    articles: parseData.articles,
    
  })
  }

  hendelNextclick=async()=>
  {
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7d583be278ba421fa8a682a5c54e622d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loding:true})
  let data = await fetch(url);
  let parseData = await data.json();
  

  this.setState({

    page:this.state.page+1,
    articles: parseData.articles,
    loding:false
  })
  }

  render() {
    return (
   
      <div className="container my-3">
      {this.state.loding && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
              
                <Newsitem
                  titel={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary my-3" onClick={this.hendelPreviousclick}>&larr; Previous</button>
        <button disabled={this.state.page>=Math.ceil(this.state.totalResult/(this.props.pageSize))} type="button" className="btn btn-primary my-3" onClick={this.hendelNextclick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
