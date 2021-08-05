import React, { Component } from 'react';
import './mainPage.css';
import NavBar from '../components/navBar/navBar';
import LeftColumn from '../components/leftColumn/leftColumn';
import RightColumn from '../components/rightColumn/rightColumn/rightColumn';
import Footer from '../components/footer/footer';
import PostMoreInfo from '../components/utilities/postMoreInfo/postMoreInfo';


class MainPage extends Component {
    state = {
       posts: [
          { popularity: "popular", 
            date: 'March 3, 2021', 
            title: 'FRENCH CREPE FROM BORDEAUX, FRANCE', 
            image: "URL('https://images.unsplash.com/photo-1584299574144-b5f8ac209707?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZyYW5jZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nam veniam quibusdam magnam, quia sint nesciunt, a quod sunt ipsam necessitatibus debitis voluptatum omnis perspiciatis laborum, explicabo odio corporis ea accusantium voluptate aliquid tenetur aperiam similique. Illo non illum sunt ipsum laudantium quisquam exercitationem minus voluptate explicabo sapiente eius, corrupti temporibus et quod. Earum quidem laudantium quia fuga accusantium ipsum! Maiores ea rem ab, unde voluptatum pariatur ducimus culpa possimus amet harum esse, reiciendis dolores temporibus iste! Sequi, ullam fugit, soluta a aliquid nostrum beatae quas illo enim vel voluptatum, magni quisquam doloremque. Ipsa, error impedit in cupiditate minus rem. Incidunt praesentium maiores repudiandae esse ipsa a, sint ea in delectus. Mollitia nostrum veritatis quia quis esse! Corporis provident impedit illo quis aut dicta ex asperiores officia numquam mollitia quasi, tempore aspernatur odio delectus libero atque sequi sapiente voluptas sed, laudantium ab sint non eum omnis. Labore expedita animi aut eius! Quos cupiditate iste beatae. Rem aliquam delectus provident temporibus? Amet, facere? Exercitationem rem voluptatem sequi possimus numquam animi sit illo ipsam tenetur adipisci aut nesciunt distinctio nam harum, fugit perferendis consequuntur doloribus? Magni sapiente quod quaerat in sint inventore obcaecati, excepturi libero quos voluptate, velit temporibus nostrum expedita eveniet ab suscipit repellat! Commodi corporis dolorum debitis quasi assumenda officia ducimus eius perspiciatis similique omnis, repellendus delectus, soluta atque vel quibusdam inventore incidunt maiores iure accusamus repellat iusto in fugit et. Magni et at porro assumenda debitis rem voluptatum, asperiores tempore est id sit nam quas fugit? Odio natus suscipit quod omnis accusantium, nemo eos cupiditate, provident eius aut possimus error delectus! Cumque, delectus. Consequuntur dolorem minima dolores ab eligendi, dicta eveniet quaerat similique porro, aut, totam voluptatum facere officiis commodi neque ad. Laboriosam nostrum voluptate nam! Fuga hic rerum qui saepe modi voluptas inventore reprehenderit accusantium necessitatibus consectetur, culpa, eum et pariatur voluptatem labore porro nostrum ab, nesciunt delectus. Molestias omnis odio possimus repudiandae illum sapiente animi fugit autem tempora voluptas odit voluptatem aut labore porro aperiam nihil rem, impedit veritatis sed numquam perferendis. Aspernatur ipsa facere veritatis, corrupti asperiores ab eligendi libero ad odio possimus exercitationem sequi obcaecati quia! Minima magnam repudiandae obcaecati perspiciatis explicabo adipisci incidunt dignissimos, repellendus enim tempore error quisquam veniam sequi laborum necessitatibus provident consequatur reprehenderit eius et. Ea praesentium ab culpa laboriosam ipsam odit, iusto atque dolorem ad, eos at amet nulla. Sunt voluptates beatae iure incidunt ab rem eligendi eius maxime asperiores?",
            comments: ['Maria : Good one !', 'Sara : I were there once, loved it'],
            imageList: ['https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx0cmF2ZWx8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60','https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'],
          },
          { popularity: "popular",
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA',
            image: "URL('https://images.unsplash.com/photo-1564332680205-1b74e65f9608?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1Y2hhcmVzdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Paul : so nice'],
            imageList: ['https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal",
            date: 'March 3, 2021',
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA',
            image: "URL('https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tenetur debitis atque sint aliquid ipsum qui tempore nisi non iste nostrum aspernatur, impedit nulla eligendi mollitia numquam dicta labore a corporis enim esse? Est voluptatum rerum soluta iusto quam fugit! Natus eum deleniti, ullam maxime eos magni ea harum optio assumenda ut dolores, eius voluptatibus possimus corporis nemo? Quisquam explicabo amet laborum quis quas repellendus earum aliquam, sequi rerum consequuntur quibusdam, sunt nesciunt? Totam consequatur at aut sed dolore recusandae incidunt expedita adipisci, dicta illo deleniti exercitationem quaerat quidem enim beatae fugit magnam similique eius. Consequatur pariatur quod autem eius.",
            comments: ['Jana : nice place to go'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal",
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Mike : I’m not going to lie: I think I have a pretty good travel blog.'],
            imageList: ['https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "popular", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Yonas : They also offer an incredible lineup of community events from documentary film nights to writing workshops to beach cleanup brunches. Check their social media for details when you’re on the island!'],
            imageList: ['https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident modi neque voluptate molestias eos expedita, repellat eum asperiores ex tenetur possimus aspernatur, officiis officia adipisci dolorem laboriosam nam ipsa sit laborum quia omnis corporis. Distinctio mollitia dolor, aut ipsa facilis necessitatibus. Porro, soluta. Dolores quis odit illo dolorem harum quae iure necessitatibus tempore suscipit quam. Ipsum exercitationem sequi quisquam, dolorem veritatis itaque harum eaque dignissimos quia repellat deserunt illum modi tempore iusto esse nesciunt quam architecto obcaecati quis laborum veniam, nisi quo. Dolores, assumenda! Ad illo dignissimos iste odio, accusantium quisquam laborum vel esse beatae at architecto suscipit nam corrupti tempora vitae ut aut maxime cum. Aperiam, quibusdam harum natus nostrum reprehenderit voluptates vel laborum beatae quasi obcaecati illum odit aut itaque, ea eligendi amet nemo voluptatum a sit earum molestias. Quam dicta perspiciatis officia vero perferendis aperiam optio corrupti doloribus nobis iure odio deserunt sed vel, quibusdam natus dolorem!",
            comments: ['Nikkie : Sabich, pitas, kebabs, Israeli salads, Moroccan stews, they have it all!', 'Olaf : nice'],
            imageList: ['https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Maya : It’s the kind of place you hope to stumble across'],
            imageList: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1499678329028-101435549a4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Misha : the food is very expensive for the area'],
            imageList: ['https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "popular", 
            date: 'March 3, 2021', title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Paul : It’s the kind of place you hope to stumble across', 'Rai : It’s the kind of place you hope to stumble across', 'Dana : the clanging echoing between tufts of grass made the goats impossible to ignore', 'Roj : They also offer an incredible lineup of community events from documentary film nights to writing workshops to beach cleanup brunches. Check their social media for details when you’re on the island!', 'Edie : nice place to go', 'Paulina : nice place to go'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Sara : It’s the kind of place you hope to stumble across', 'Dann : I loved it here!', 'it’s a gorgeous spot to dream away an afternoon.', 'Natasha : the food is very expensive for the area', ],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Yoda : I loved it here!', 'Love : it’s a gorgeous spot to dream away an afternoon.'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1523496922380-91d5afba98a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Rayan : It has gotten a serious glow-up in the interim, and was so hip I almost didn’t recognize it.'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
          { popularity: "normal", 
            date: 'March 3, 2021', 
            title: '10 THINGS TO KNOW BEFORE YOU GO TO ROMANIA', 
            image: "URL('https://images.unsplash.com/photo-1496864137062-a12b5defe6be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')", 
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Sine ea igitur iucunde negat posse se vivere? At hoc in eo M. Nihil illinc huc pervenit. Qui autem esse poteris, nisi te amor ipse ceperit? Sumenda potius quam expetenda. Age, inquies,',
            comments: ['Sabrina : the clanging echoing between tufts of grass made the goats impossible to ignore'],
            imageList: ['https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1475688621402-4257c812d6db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
              'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
              ],
          },
       ],
       currentPage: 1,
       emailValue: '',
       confirmationBtn : 'CONFIRM',
       leftColumnDisplay: 'flex',
       moreInfoDisplay: 'none',
       postDisplayed: 0,
       commentName: '',
       commentValue: '',
  }

    navBarButtonClicked = () => { 
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
    }

    onPageChange = (index) => {
        this.setState({currentPage : index + 1});
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
      }

      onPrevious = () => {
        if(this.state.currentPage === 1) { 
          return;
        } else {
          const prevPage = this.state.currentPage - 1;
          this.setState({currentPage : prevPage});
          window.scrollTo({
            top: 1100, 
            behavior: 'smooth'
          });
        }
      }

      onNext = () => {
        const totalPages = Math.floor(this.state.posts.length / 3) + 1;
        if(this.state.currentPage === totalPages) { 
          return;
        } else {
          const nxtPage = this.state.currentPage + 1;
          this.setState({currentPage : nxtPage});
          window.scrollTo({
            top: 1100, 
            behavior: 'smooth'
          });
        }
      }

      emailChanged = async (event) => {
        const value = event.target.value;
        await this.setState({emailValue : value});
      }

      emailConfirmation = () => {
        var testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        const confirmationBtn = testEmail.test(this.state.emailValue) ? "THANK YOU !" : "TRY AGAIN";
        this.setState({ confirmationBtn });
    }

    postClickedd = (index) => {
      const indexSelected = parseInt(index);
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
      this.setState({leftColumnDisplay : 'none'});
      this.setState({moreInfoDisplay : 'flex'});
      this.setState({postDisplayed : indexSelected});
    }

    goBack = () => {
      window.scrollTo({
        top: 1100, 
        behavior: 'smooth'
      });
      this.setState({leftColumnDisplay : 'flex'});
      this.setState({moreInfoDisplay : 'none'});
      this.setState({postDisplayed : 0});
    }

    moreInfoNext = () => {
      const newIndex = this.state.postDisplayed  + 1;
      console.log(this.state.postDisplayed);
      console.log(this.state.posts.length);
      if(this.state.postDisplayed === this.state.posts.length - 1) { 
        return;
      } else {
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
        this.setState({postDisplayed : newIndex});
      }
    }

    moreInfoPrev = (indexSelectedInfo) => {
      const newIndex = this.state.postDisplayed - 1;
      if(indexSelectedInfo === 0) { 
        return;
      } else {
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth'
        });
        this.setState({postDisplayed : newIndex});
      }
    }

    commentNameAdded = async (event) => {
      const commentName = event.target.value;
      await this.setState({commentName});
    }


    commentTextAdd = async (event) => {
      const commentValue = event.target.value;
      await this.setState({commentValue});
    }

    commentConfirmed = async() => {
      const index = this.state.postDisplayed;
      const posts = [...this.state.posts];
      if(this.state.commentName.length > 1 && this.state.commentValue.length > 1 ) {
        posts[index].comments.push(`${this.state.commentName} : ${this.state.commentValue}`)
        this.setState({posts});
        this.setState({commentValue : ''});
        this.setState({commentName : ''});
      } else if(this.state.commentName.length < 1 && this.state.commentValue.length > 1 ) { 
        alert("Please enter your name");
      } else if(this.state.commentName.length > 1 && this.state.commentValue.length < 1 ) { 
        alert("Please enter your comment");
      } else {
        return;
      }
    }


  render() {
    return (
      <div className="body">

        <NavBar navBarButtonClicked={this.navBarButtonClicked} />

        <div className="middlePart">

          <LeftColumn 
            leftColumnDisplay={this.state.leftColumnDisplay}
            posts={this.state.posts} 
            currentPage={this.state.currentPage} 
            onClick={this.onPageChange} 
            onPrev={this.onPrevious} 
            onNext={this.onNext}
            postClicked={this.postClickedd} />

          <PostMoreInfo 
            display={this.state.moreInfoDisplay}
            index={this.state.postDisplayed}
            posts={this.state.posts}
            goBack={this.goBack}
            postDisplayed={this.state.postDisplayed}
            moreInfoGoNext={this.moreInfoNext}
            moreInfoGoPrev={this.moreInfoPrev}
            commentNameAdded={this.commentNameAdded}
            commentName={this.state.commentName}
            commentTextAdd={this.commentTextAdd}
            commentValue={this.state.commentValue}
            commentConfirmed={this.commentConfirmed}
             />

          <RightColumn  
            posts={this.state.posts} 
            emailVerification={this.emailChanged} 
            inputValue={this.state.emailValue} 
            confirmationBtn={this.state.confirmationBtn} 
            emailConfirmation={this.emailConfirmation} />
        </div>

        <Footer posts={this.state.posts} />

      </div>
    );
  }
}

export default MainPage;
