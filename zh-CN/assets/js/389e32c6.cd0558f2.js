"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99926],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return a?n.createElement(g,r(r({ref:t},d),{},{components:a})):n.createElement(g,r({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26934:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return h},default:function(){return p}});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={slug:"Apache IoTDB (Internet of Things Database) is a software system that integrates the collection",title:"SeaTunnel supports IoTDB to implement IoT data synchronization",tags:["Meetup"]},l="SeaTunnel supports IoTDB to implement IoT data synchronization",c={permalink:"/zh-CN/blog/Apache IoTDB (Internet of Things Database) is a software system that integrates the collection",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-12-10-SeaTunnel-supports-IoTDB-to-implement-IoT-data-synchronization.md",source:"@site/blog/2022-12-10-SeaTunnel-supports-IoTDB-to-implement-IoT-data-synchronization.md",title:"SeaTunnel supports IoTDB to implement IoT data synchronization",description:"Apache IoTDB (Internet of Things Database) is a software system that integrates the collection, storage, management, and analysis of time series data of the Internet of Things, which can meet the needs of massive data storage, high-speed data reading, and complex data analysis in the field of Industrial Internet of Things. Currently, SeaTunnel already supports IoTDB Connector, realizing the connection of data synchronization scenarios in the IoT field.",date:"2022-12-10T00:00:00.000Z",formattedDate:"2022\u5e7412\u670810\u65e5",tags:[{label:"Meetup",permalink:"/zh-CN/blog/tags/meetup"}],readingTime:11.6,truncated:!1,authors:[],frontMatter:{slug:"Apache IoTDB (Internet of Things Database) is a software system that integrates the collection",title:"SeaTunnel supports IoTDB to implement IoT data synchronization",tags:["Meetup"]},prevItem:{title:"In the recently released SeaTunnel 2.3.0 official version",permalink:"/zh-CN/blog/Reveal the core design of the SeaTunnel Zeta synchronization engine!"},nextItem:{title:"SeaTunnel engine, designed for tens-of-billions data integration",permalink:"/zh-CN/blog/Apache SeaTunnel Committer | Zongwen Li"}},d={authorsImageUrls:[]},h=[{value:"Introduction to SeaTunnel basic concepts",id:"introduction-to-seatunnel-basic-concepts",level:2},{value:"IoTDB Connector Features",id:"iotdb-connector-features",level:2},{value:"Source Features",id:"source-features",level:2},{value:"Sink functional features",id:"sink-functional-features",level:2},{value:"IoTDB data reading analysis",id:"iotdb-data-reading-analysis",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Field projection",id:"field-projection",level:2},{value:"Batch read Device",id:"batch-read-device",level:2},{value:"Parallel reading",id:"parallel-reading",level:2},{value:"IoTDB Connector Data Write Analysis",id:"iotdb-connector-data-write-analysis",level:2},{value:"Data type mapping",id:"data-type-mapping-1",level:2},{value:"Dynamic injection of metadata",id:"dynamic-injection-of-metadata",level:2},{value:"Batch commits and exception retries",id:"batch-commits-and-exception-retries",level:2},{value:"IoTDB Connector Usage Examples",id:"iotdb-connector-usage-examples",level:2},{value:"Exporting data from IoTDB",id:"exporting-data-from-iotdb",level:2},{value:"Importing data to IoTDB",id:"importing-data-to-iotdb",level:2},{value:"Synchronizing data between IoTDB",id:"synchronizing-data-between-iotdb",level:2},{value:"How to get involved in contribution",id:"how-to-get-involved-in-contribution",level:2},{value:"Next steps for the IoTDB Connector",id:"next-steps-for-the-iotdb-connector",level:2}],u={toc:h};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(77018).Z,width:"720",height:"320"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache IoTDB (Internet of Things Database) is a software system that integrates the collection, storage, management, and analysis of time series data of the Internet of Things, which can meet the needs of massive data storage, high-speed data reading, and complex data analysis in the field of Industrial Internet of Things. Currently, SeaTunnel already supports IoTDB Connector, realizing the connection of data synchronization scenarios in the IoT field.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"At the SeaTunnel community online meeting in October this year, SeaTunnel Committer Wang Hailin introduced the implementation process of SeaTunnel\u2019s access to IoTDB, allowing users to have a deeper understanding of the operation method and principle of IoTDB data synchronization.")),(0,i.kt)("p",null,"The topic I\u2019m sharing today is using SeaTunnel to play around with data synchronization in IoTDB."),(0,i.kt)("p",null,"This session is divided into 6 subsections. Firstly, we will have an understanding of the basic concept of SeaTunnel, and on this basis, we will focus on the functional features of IoTDB Connector, then we will analyze the data read and write functions of IoTDB Connector and the parsing of the implementation, and finally, we will show some typical usage scenarios and cases to let you understand how to use Finally, we will show some typical usage scenarios and cases to understand how to use the IoTDB Connector to implement into production environments. The last point is the community\u2019s next steps for the IoTDB Connector and guidance on how to get involved in contributing."),(0,i.kt)("h2",{id:"introduction-to-seatunnel-basic-concepts"},"Introduction to SeaTunnel basic concepts"),(0,i.kt)("p",null,"This is the basic architecture of SeaTunnel, an engine built for data synchronization, with a set of abstract APIs for reading data from and writing to a variety of data sources."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(86683).Z,width:"720",height:"389"}),"\nThe left-hand side briefly lists the Source scenarios, for example, we abstract the Source\u2019s API, Type, and State, to read the data source, unifying the data types of the various data sources to the abstract type defined in it, and some state recovery and retention of the read location during the reading process."),(0,i.kt)("p",null,"This is an abstraction for Source, and we have done a similar abstraction for Sink, i.e. how data is written, and how the data type matches the real data source type, and how the state is restored and retained."),(0,i.kt)("p",null,"Based on these APIs, we will have a translation layer to translate these APIs to the corresponding execution engine. SeaTunnel currently supports three execution engines, Spark, Flink, and our own execution engine, SeaTunnel Engine, which will be released soon."),(0,i.kt)("p",null,"This is roughly what SeaTunnel does, SeaTunnel relies on Source and Sink to read and write data for data synchronization, we call them Connectors. The Connector consists of a Source and a Sink."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(99101).Z,width:"720",height:"758"}),"\nFrom the diagram above we see the different data sources, Source is responsible for reading data from the various data sources and transforming it into SeaTunnelRow abstraction layer and Type to form the abstraction layer, Sink is responsible for pulling data from the abstraction layer and writing it to the concrete data store to transform it into the store concrete format."),(0,i.kt)("p",null,"The combination of Source + Abstraction Layer + Sink enables the synchronization of data between multiple heterogeneous data sources."),(0,i.kt)("p",null,"I\u2019ll use a simple example below to illustrate how SeaTunnel\u2019s Source and Sink work."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(14052).Z,width:"720",height:"822"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(64554).Z,width:"720",height:"340"}),"\nWe can specify the number of Sources, Sink configuration file combinations through the configuration file The commands in the toolkit provided by SeaTunnel take the configuration file with them and when executed enable data handling."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(17559).Z,width:"720",height:"1202"}),"\n",(0,i.kt)("img",{loading:"lazy",src:a(85697).Z,width:"651",height:"1280"}),"\n",(0,i.kt)("img",{loading:"lazy",src:a(45578).Z,width:"720",height:"933"}),"\nThis is the Connector ecosystem that is currently supported by SeaTunnel, such as the data sources supported by JBDC, HDFS, Hive, Pulsar, message queues, etc. are currently supported."),(0,i.kt)("p",null,"The list in the picture is not exhaustive of the Connectors supported by SeaTunnel. Under the GitHub SeaTunnel project, you can see the Plugins directory, where supported Connector plugins are constantly being added and where you can see the latest access in real-time."),(0,i.kt)("h2",{id:"iotdb-connector-features"},"IoTDB Connector Features"),(0,i.kt)("p",null,"Below is information about access to the IoTDB Connector."),(0,i.kt)("p",null,"Firstly, we would like to introduce the functional features of IoTDB, the IoTDB Connector integrated with SeaTunnel, and what exactly it supports for your reference."),(0,i.kt)("h2",{id:"source-features"},"Source Features"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(30905).Z,width:"720",height:"384"}),"\nFirstly, there are the typical usage scenarios supported by Source, such as bulk reading of devices, field projection, data type mapping, parallel reading, etc."),(0,i.kt)("p",null,"As you can see above, IoTDB supports all features except once, exactly once and stream mode, such as batch reads, IoTDB has a SQL syntax similar to group by device, which allows you to read data from multiple devices in a single batch. For basic data type projection, the SQL in IoTDB will take time by default when looking up any metric, or group by the device will take the device column, and we also support projection onto SeaTunnel columns by default."),(0,i.kt)("p",null,"The only data type not supported is Victor, all others are supported."),(0,i.kt)("p",null,"For the parallel read piece, the IoTDB data is actually timestamped and we use timestamped ranges to achieve parallel reads."),(0,i.kt)("p",null,"The recovery of the state, since we have divided the time range read into different splits, can be done based on the Split location information."),(0,i.kt)("h2",{id:"sink-functional-features"},"Sink functional features"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(52118).Z,width:"720",height:"372"})),(0,i.kt)("p",null,"The diagram above shows the features already supported by SeaTunnel. Regarding metadata extraction, we support the extraction of metadata such as measurement, device, etc. from SeaTunnelRow and the extraction or use of current processing time from SeaTunnelRow. Batch commits and exception retries are also supported."),(0,i.kt)("h2",{id:"iotdb-data-reading-analysis"},"IoTDB data reading analysis"),(0,i.kt)("p",null,"Next, we analyze the implementation and support for data reading."),(0,i.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,"The first is the data type mapping, which actually reads the IoTDB data type to SeaTunnel, so it has to be converted to the SeaTunnel data type.\n",(0,i.kt)("img",{loading:"lazy",src:a(73177).Z,width:"720",height:"460"}),"\nThe BOOLEAN, INT32, INT64, etc. listed here all have corresponding SeaTunnel data types. INT32 can be mapped according to the read type on the SeaTunnel, or to TINYINT, SMALLINT, or INT when the range of values is small."),(0,i.kt)("p",null,"The Vector type is not currently supported."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(3896).Z,width:"720",height:"758"}),"\nThis is the corresponding example code showing how the mapping is done where the type conversion is done."),(0,i.kt)("h2",{id:"field-projection"},"Field projection"),(0,i.kt)("p",null,"The other is the field projection when reading, we can automatically map Time fields when reading IoTDB data, or we can choose to map some of the data to SeaTunnel, such as TIMESTAMP, or BIGINT."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(95078).Z,width:"720",height:"320"}),"\nThe SQL extraction of column codes allows you to extract only some of the columns you need, and when used on SeaTunnel, you can specify the name, type, etc. of the column after it is mapped to SeaTunnel via fields. The final result of the data read on SeaTunnel is shown in the figure above."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(6454).Z,width:"720",height:"368"})),(0,i.kt)("p",null,"We have just seen that we do not have the time column in the SQL, but the actual result is that there is this column, so we support the projection of the time column field, the time column can actually be projected into different data types, the user can convert according to their needs. The diagram above shows the implementation logic."),(0,i.kt)("h2",{id:"batch-read-device"},"Batch read Device"),(0,i.kt)("p",null,"This is a common requirement, as we are likely to synchronize data in large batches with the same data structure."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(55627).Z,width:"720",height:"333"})),(0,i.kt)("p",null,"SeaTunnel supports the align-by-device syntax so that device columns can also be projected onto the SeaTunnelRow"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(69583).Z,width:"720",height:"185"}),"\nAssuming there is a table in IoTDB, we project the device column onto SeaTunnel by making it data as well through syntax. After configuring the device name column and specifying the data type, we end up reading the data on SeaTunnel in the format shown above, containing the Time, device column, and the actual data value. This makes it possible to read data from the same device in bulk."),(0,i.kt)("h2",{id:"parallel-reading"},"Parallel reading"),(0,i.kt)("p",null,"The other is a parallel read."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Split\nWe have scoped the table by the Time column and if we are reading in parallel we may want to scope the table to allow parallel threads/processes to read a specific range of data. By configuring the three parameters, the end result will be a query SQL, where the original SQL is divided into different splits with query conditions to achieve the actual read SQL.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allocate Split to the reader\nOnce the split is done, there is an allocation logic to follow in order to distribute it to each parallel reader."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(77636).Z,width:"720",height:"162"})),(0,i.kt)("p",null,"This logic is based on the ID of the split to the reader, which may be more random, or more uniform if the ID of the split is more hashed, depending on the Connector."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(63387).Z,width:"720",height:"528"})),(0,i.kt)("p",null,"The result achieved is shown in the picture."),(0,i.kt)("h1",{id:"status-recovery"},"Status recovery"),(0,i.kt)("p",null,"There is also state recovery involved when reading because if the task is large, the reading will take longer, and if there is an error or exception in the middle, you have to consider how to recover the state from the point where the error occurred, and then read it again afterward."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(77636).Z,width:"720",height:"162"}),"\n",(0,i.kt)("img",{loading:"lazy",src:a(71963).Z,width:"720",height:"268"}),"\n",(0,i.kt)("img",{loading:"lazy",src:a(6390).Z,width:"720",height:"256"})),(0,i.kt)("p",null,"SeaTunnel\u2019s state recovery is mainly through the reader storing the unread Split information into the state, and then the engine will periodically take a snapshot of the state when reading so that we can restore the last snapshot when we recover and continue reading afterward."),(0,i.kt)("h2",{id:"iotdb-connector-data-write-analysis"},"IoTDB Connector Data Write Analysis"),(0,i.kt)("p",null,"The next step is the parsing of the data writes."),(0,i.kt)("h2",{id:"data-type-mapping-1"},"Data type mapping"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(15551).Z,width:"720",height:"457"})),(0,i.kt)("p",null,"Data writing also involves data type mapping, but here, in contrast to data reading, it maps the SeaTunnel data types to the IoTDB data types. As IoTDB only has INT32, the writing process involves lifting the data types TINYINT and SMALLINT. All other data types can be converted one-to-one; ARRAY and VECTOR data types are not yet supported."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(85946).Z,width:"720",height:"574"})),(0,i.kt)("p",null,"The above diagram shows the corresponding code, the implementation logic will need to be seen in our specific mapping."),(0,i.kt)("h2",{id:"dynamic-injection-of-metadata"},"Dynamic injection of metadata"),(0,i.kt)("p",null,"SeaTunnel supports the dynamic injection of metadata."),(0,i.kt)("p",null,"When heterogeneous data sources are written to the IoTDB, device, measurement, and time are extracted from each row of data, either by serializing the SeaTunnelRow with a fixed column value as configured. Alternatively, the system time can be used as the time, or the current system time can be populated if no time column is specified, and the storage group can be configured to be automatically appended to the device prefix."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(69213).Z,width:"720",height:"180"})),(0,i.kt)("p",null,"For example, suppose that the structure of a row in SeaTunnel reading the data format shown above can be configured to synchronize to the IoTDB and the result obtained is as follows."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(47257).Z,width:"720",height:"197"})),(0,i.kt)("p",null,"The temperature and humidity columns we need were extracted, and ts and device names were extracted as the original data for the IoTDB."),(0,i.kt)("h2",{id:"batch-commits-and-exception-retries"},"Batch commits and exception retries"),(0,i.kt)("p",null,"In addition, Sink needs to handle batch and retry when writing. For batches, we can configure the appropriate batch configuration, including support for configuring the number and interval of batch commits; if the data is cached to memory, you can enable a separate thread for timed commits."),(0,i.kt)("p",null,"For retries, SeaTunnel supports the configuration of the number of retries, the waiting interval and the maximum number of retries, as well as the possibility to end a retry if it encounters a non-recoverable error when it has finished."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(62734).Z,width:"720",height:"466"})),(0,i.kt)("h2",{id:"iotdb-connector-usage-examples"},"IoTDB Connector Usage Examples"),(0,i.kt)("p",null,"After the previous analysis of reading and writing data, let\u2019s look at three typical examples of usage scenarios."),(0,i.kt)("h2",{id:"exporting-data-from-iotdb"},"Exporting data from IoTDB"),(0,i.kt)("p",null,"The first scenario is exporting data from the IoTDB, the example I have given here is reading data from the IoTDB to the Console."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read in parallel, output to Console")),(0,i.kt)("p",null,"Parallelism: 2"),(0,i.kt)("p",null,"Number of batches: 24"),(0,i.kt)("p",null,"Time frame: 2022\u201309\u201325 ~ 2022\u201309\u201326\n",(0,i.kt)("img",{loading:"lazy",src:a(82872).Z,width:"720",height:"247"})),(0,i.kt)("p",null,"Let\u2019s assume that we have a data table in IoTDB and we want to export the data to the Console. The whole configuration is shown above and needs to map the columns of data we want to export and the time range to check."),(0,i.kt)("p",null,"This is the simplest example, but in practice, the Sink side may be more complex, so you will need to refer to the documentation of the corresponding data source for the appropriate configuration."),(0,i.kt)("h2",{id:"importing-data-to-iotdb"},"Importing data to IoTDB"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read database, batch write to IoTDB",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Batch writing: one commit every 1024 entries or every 1000 ms"),(0,i.kt)("li",{parentName:"ul"},"-Extracting metadata device, timestamp, measurement"),(0,i.kt)("li",{parentName:"ul"},"-Specify the storage group: root.test_group")))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(75390).Z,width:"720",height:"284"}),"\nAnother typical usage scenario is to import data from other data sources into IoTDB. suppose I have an external database table with columns like ts, temperature, humidity, etc. and we import it into IoTDB, requiring the columns of temperature and humidity, but the rest can be left out. The whole configuration is shown in the diagram above, you can refer to it."),(0,i.kt)("p",null,"On the Sink side, you mainly have to specify the Key of the device column, such as from which data the device is extracted, from which class the time is extracted, which columns to write to the IoTDB, etc."),(0,i.kt)("p",null,"As you can see, we can configure the storage group, which is the storage group of the IoTDB, which can be specified by the storage group."),(0,i.kt)("h2",{id:"synchronizing-data-between-iotdb"},"Synchronizing data between IoTDB"),(0,i.kt)("p",null,"The third scenario is to synchronize data between IoTDB and IoTDB and write to IoTDB in bulk, suppose there is a table in IoTDB that needs to be synchronized to another IoTDB, after synchronization the storage group has changed and the name of the indicator of the data column has also changed, then you can use projection to rewrite the indicator name and use SQL to rewrite the storage group."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(22049).Z,width:"720",height:"309"})),(0,i.kt)("h2",{id:"how-to-get-involved-in-contribution"},"How to get involved in contribution"),(0,i.kt)("p",null,"Finally, a few words about the next steps for the IoTDB Connector and how you can get involved in improving the Connector and contributing new features that are needed."),(0,i.kt)("h2",{id:"next-steps-for-the-iotdb-connector"},"Next steps for the IoTDB Connector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for reading and writing vector data types"),(0,i.kt)("li",{parentName:"ul"},"Support for tsfile reads and writes"),(0,i.kt)("li",{parentName:"ul"},"Support for writing tsfile and reloading to IoTDB")))}p.isMDXComponent=!0},77018:function(e,t,a){t.Z=a.p+"assets/images/16714316482580-41ece0a1c0d976185e2c75f3329aa12d.jpg"},86683:function(e,t,a){t.Z=a.p+"assets/images/16714316839299-a92e73bfbc3881b099146d6d161c412f.jpg"},99101:function(e,t,a){t.Z=a.p+"assets/images/16714316928812-337c3d4770094c09ae55a5312670d87f.jpg"},14052:function(e,t,a){t.Z=a.p+"assets/images/16714317022389-f17930bc8877d173d40eab8fdfe47631.jpg"},64554:function(e,t,a){t.Z=a.p+"assets/images/16714317067444-f828b5a72003d3caec8958edccdc8dca.jpg"},17559:function(e,t,a){t.Z=a.p+"assets/images/16714317166018-4c6a20778066aa8bfb5c319c4706b17b.jpg"},85697:function(e,t,a){t.Z=a.p+"assets/images/16714317203806-c4d2fe2e0a1d9a235d59e878c42b9308.jpg"},45578:function(e,t,a){t.Z=a.p+"assets/images/16714317262218-a608b27e7ed69d6bab301f6bdf929966.jpg"},30905:function(e,t,a){t.Z=a.p+"assets/images/16714317512435-d9aa02e6d36efefd2a2c20cf77ce8f6b.jpg"},52118:function(e,t,a){t.Z=a.p+"assets/images/16714317679569-a1923e70d93e6204c42aa7531a96a024.jpg"},73177:function(e,t,a){t.Z=a.p+"assets/images/16714317930593-3931931989e2fc8224bb071304463c53.jpg"},3896:function(e,t,a){t.Z=a.p+"assets/images/16714318216373-6472b0b9745b67620ca357054a0715fb.jpg"},95078:function(e,t,a){t.Z=a.p+"assets/images/16714318381313-29a760765ae69e80e04015976521aabe.jpg"},6454:function(e,t,a){t.Z=a.p+"assets/images/16714318550071-25f4bde1d47b33463a1f2d6e13651435.jpg"},55627:function(e,t,a){t.Z=a.p+"assets/images/16714318796196-bee32b3eae066fdc0ce82182fc6eeb09.jpg"},69583:function(e,t,a){t.Z=a.p+"assets/images/16714318873362-54b8d7281a93bc335a39e995db5e1a4f.jpg"},77636:function(e,t,a){t.Z=a.p+"assets/images/16714319281280-dfc833cfbd8315f969c518271cd38e95.jpg"},63387:function(e,t,a){t.Z=a.p+"assets/images/16714319372730-361662ffb0d74adea0f64073bf2cf44f.jpg"},71963:function(e,t,a){t.Z=a.p+"assets/images/16714319569097-2f328036d7363eb6b0d3678984d78af0.jpg"},6390:function(e,t,a){t.Z=a.p+"assets/images/16714319599521-13dc977f614b93a4db1eed15ee1e4f30.jpg"},15551:function(e,t,a){t.Z=a.p+"assets/images/16714319862080-244a507b57e8568444d4ead4b29349aa.jpg"},85946:function(e,t,a){t.Z=a.p+"assets/images/16714319949478-1f6dc7ae103ae0ab3852b1350c74f659.jpg"},69213:function(e,t,a){t.Z=a.p+"assets/images/16714320117277-aca2fc93f15601665ef8fd53529953fa.jpg"},47257:function(e,t,a){t.Z=a.p+"assets/images/16714320201848-d017fa8600fc03c9e77914a53c961557.jpg"},62734:function(e,t,a){t.Z=a.p+"assets/images/16714320394193-27ad106e26762595d5b919019bd72550.jpg"},82872:function(e,t,a){t.Z=a.p+"assets/images/16714320856052-31c7463162a38c89034e9a14813d4686.jpg"},75390:function(e,t,a){t.Z=a.p+"assets/images/16714321290339-3c0479957e9a28da554374f5c8d4f426.jpg"},22049:function(e,t,a){t.Z=a.p+"assets/images/16714321480992-670f922b9dbe990571115d671159bb22.jpg"}}]);