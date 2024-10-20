import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

// Import all book schemas
import { Acts, actsSchema } from './schema/acts.schema';
import { Amos, amosSchema } from './schema/amos.schema';
import { Colossians, colossiansSchema } from './schema/colossians.schema';
import { Daniel, danielSchema } from './schema/daniel.schema';
import { Deuteronomy, deuteronomySchema } from './schema/deuteronomy.schema';
import { Ecclesiastes, ecclesiastesSchema } from './schema/ecclesiastes.schema';
import { Ephesians, ephesiansSchema } from './schema/ephesians.schema';
import { Esther, estherSchema } from './schema/esther.schema';
import { Exodus, exodusSchema } from './schema/exodus.schema';
import { Ezekiel, ezekielSchema } from './schema/ezekiel.schema';
import { Ezra, ezraSchema } from './schema/ezra.schema';
import { FirstChronicles, firstChroniclesSchema } from './schema/firstChronicles.schema';
import { FirstCorinthians, firstCorinthiansSchema } from './schema/firstCorinthians.schema';
import { FirstJohn, firstJohnSchema } from './schema/firstJohn.schema';
import { FirstKings, firstKingsSchema } from './schema/firstKings.schema';
import { FirstPeter, firstPeterSchema } from './schema/firstPeter.schema';
import { FirstSamuel, firstSamuelSchema } from './schema/firstSamuel.schema';
import { FirstThessalonians, firstThessaloniansSchema } from './schema/firstThessalonians.schema';
import { FirstTimothy, firstTimothySchema } from './schema/firstTimothy.schema';
import { Galatians, galatiansSchema } from './schema/galatians.schema';
import { Genesis, genesisSchema } from './schema/genesis.schema';
import { Habakkuk, habakkukSchema } from './schema/habakkuk.schema';
import { Haggai, haggaiSchema } from './schema/haggai.schema';
import { Hebrews, hebrewsSchema } from './schema/hebrews.schema';
import { Hosea, hoseaSchema } from './schema/hosea.schema';
import { Isaiah, isaiahSchema } from './schema/isaiah.schema';
import { James, jamesSchema } from './schema/james.schema';
import { Jeremiah, jeremiahSchema } from './schema/jeremiah.schema';
import { Job, jobSchema } from './schema/job.schema';
import { Joel, joelSchema } from './schema/joel.schema';
import { John, johnSchema } from './schema/john.schema';
import { Jonah, jonahSchema } from './schema/jonah.schema';
import { Joshua, joshuaSchema } from './schema/joshua.schema';
import { Jude, judeSchema } from './schema/jude.schema';
import { Judges, judgesSchema } from './schema/judges.schema';
import { Lamentations, lamentationsSchema } from './schema/lamentations.schema';
import { Leviticus, leviticusSchema } from './schema/leviticus.schema';
import { Luke, lukeSchema } from './schema/luke.schema';
import { Malachi, malachiSchema } from './schema/malachi.schema';
import { Mark, markSchema } from './schema/mark.schema';
import { Matthew, matthewSchema } from './schema/matthew.schema';
import { Micah, micahSchema } from './schema/micah.schema';
import { Nahum, nahumSchema } from './schema/nahum.schema';
import { Nehemiah, nehemiahSchema } from './schema/nehemiah.schema';
import { Numbers, numbersSchema } from './schema/numbers.schema';
import { Obadiah, obadiahSchema } from './schema/obadiah.schema';
import { Philemon, philemonSchema } from './schema/philemon.schema';
import { Philippians, philippiansSchema } from './schema/philippians.schema';
import { Proverbs, proverbsSchema } from './schema/proverbs.schema';
import { Psalms, psalmsSchema } from './schema/psalms.schema';
import { Revelation, revelationSchema } from './schema/revelation.schema';
import { Romans, romansSchema } from './schema/romans.schema';
import { Ruth, ruthSchema } from './schema/ruth.schema';
import { SecondChronicles, secondChroniclesSchema } from './schema/secondChronicles.schema';
import { SecondCorinthians, secondCorinthiansSchema } from './schema/secondCorinthians.schema';
import { SecondJohn, secondJohnSchema } from './schema/secondJohn.schema';
import { SecondKings, secondKingsSchema } from './schema/secondKings.schema';
import { SecondPeter, secondPeterSchema } from './schema/secondPeter.schema';
import { SecondSamuel, secondSamuelSchema } from './schema/secondSamuel.schema';
import { SecondThessalonians, secondThessaloniansSchema } from './schema/secondThessalonians.schema';
import { SecondTimothy, secondTimothySchema } from './schema/secondTimothy.schema';
import { Solomon, solomonSchema } from './schema/solomon.schema';
import { ThirdJohn, thirdJohnSchema } from './schema/thirdJohn.schema';
import { Titus, titusSchema } from './schema/titus.schema';
import { Zechariah, zechariahSchema } from './schema/zechariah.schema';
import { Zephaniah, zephaniahSchema } from './schema/zephaniah.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
    MongooseModule.forFeature([{ name: Acts.name, schema: actsSchema }]),
    MongooseModule.forFeature([{ name: Amos.name, schema: amosSchema }]),
    MongooseModule.forFeature([{ name: Colossians.name, schema: colossiansSchema }]),
    MongooseModule.forFeature([{ name: Daniel.name, schema: danielSchema }]),
    MongooseModule.forFeature([{ name: Deuteronomy.name, schema: deuteronomySchema }]),
    MongooseModule.forFeature([{ name: Ecclesiastes.name, schema: ecclesiastesSchema }]),
    MongooseModule.forFeature([{ name: Ephesians.name, schema: ephesiansSchema }]),
    MongooseModule.forFeature([{ name: Esther.name, schema: estherSchema }]),
    MongooseModule.forFeature([{ name: Exodus.name, schema: exodusSchema }]),
    MongooseModule.forFeature([{ name: Ezekiel.name, schema: ezekielSchema }]),
    MongooseModule.forFeature([{ name: Ezra.name, schema: ezraSchema }]),
    MongooseModule.forFeature([{ name: FirstChronicles.name, schema: firstChroniclesSchema }]),
    MongooseModule.forFeature([{ name: FirstCorinthians.name, schema: firstCorinthiansSchema }]),
    MongooseModule.forFeature([{ name: FirstJohn.name, schema: firstJohnSchema }]),
    MongooseModule.forFeature([{ name: FirstKings.name, schema: firstKingsSchema }]),
    MongooseModule.forFeature([{ name: FirstPeter.name, schema: firstPeterSchema }]),
    MongooseModule.forFeature([{ name: FirstSamuel.name, schema: firstSamuelSchema }]),
    MongooseModule.forFeature([{ name: FirstThessalonians.name, schema: firstThessaloniansSchema }]),
    MongooseModule.forFeature([{ name: FirstTimothy.name, schema: firstTimothySchema }]),
    MongooseModule.forFeature([{ name: Galatians.name, schema: galatiansSchema }]),
    MongooseModule.forFeature([{ name: Genesis.name, schema: genesisSchema }]),
    MongooseModule.forFeature([{ name: Habakkuk.name, schema: habakkukSchema }]),
    MongooseModule.forFeature([{ name: Haggai.name, schema: haggaiSchema }]),
    MongooseModule.forFeature([{ name: Hebrews.name, schema: hebrewsSchema }]),
    MongooseModule.forFeature([{ name: Hosea.name, schema: hoseaSchema }]),
    MongooseModule.forFeature([{ name: Isaiah.name, schema: isaiahSchema }]),
    MongooseModule.forFeature([{ name: James.name, schema: jamesSchema }]),
    MongooseModule.forFeature([{ name: Jeremiah.name, schema: jeremiahSchema }]),
    MongooseModule.forFeature([{ name: Job.name, schema: jobSchema }]),
    MongooseModule.forFeature([{ name: Joel.name, schema: joelSchema }]),
    MongooseModule.forFeature([{ name: John.name, schema: johnSchema }]),
    MongooseModule.forFeature([{ name: Jonah.name, schema: jonahSchema }]),
    MongooseModule.forFeature([{ name: Joshua.name, schema: joshuaSchema }]),
    MongooseModule.forFeature([{ name: Jude.name, schema: judeSchema }]),
    MongooseModule.forFeature([{ name: Judges.name, schema: judgesSchema }]),
    MongooseModule.forFeature([{ name: Lamentations.name, schema: lamentationsSchema }]),
    MongooseModule.forFeature([{ name: Leviticus.name, schema: leviticusSchema }]),
    MongooseModule.forFeature([{ name: Luke.name, schema: lukeSchema }]),
    MongooseModule.forFeature([{ name: Malachi.name, schema: malachiSchema }]),
    MongooseModule.forFeature([{ name: Mark.name, schema: markSchema }]),
    MongooseModule.forFeature([{ name: Matthew.name, schema: matthewSchema }]),
    MongooseModule.forFeature([{ name: Micah.name, schema: micahSchema }]),
    MongooseModule.forFeature([{ name: Nahum.name, schema: nahumSchema }]),
    MongooseModule.forFeature([{ name: Nehemiah.name, schema: nehemiahSchema }]),
    MongooseModule.forFeature([{ name: Numbers.name, schema: numbersSchema }]),
    MongooseModule.forFeature([{ name: Obadiah.name, schema: obadiahSchema }]),
    MongooseModule.forFeature([{ name: Philemon.name, schema: philemonSchema }]),
    MongooseModule.forFeature([{ name: Philippians.name, schema: philippiansSchema }]),
    MongooseModule.forFeature([{ name: Proverbs.name, schema: proverbsSchema }]),
    MongooseModule.forFeature([{ name: Psalms.name, schema: psalmsSchema }]),
    MongooseModule.forFeature([{ name: Revelation.name, schema: revelationSchema }]),
    MongooseModule.forFeature([{ name: Romans.name, schema: romansSchema }]),
    MongooseModule.forFeature([{ name: Ruth.name, schema: ruthSchema }]),
    MongooseModule.forFeature([{ name: SecondChronicles.name, schema: secondChroniclesSchema }]),
    MongooseModule.forFeature([{ name: SecondCorinthians.name, schema: secondCorinthiansSchema }]),
    MongooseModule.forFeature([{ name: SecondJohn.name, schema: secondJohnSchema }]),
    MongooseModule.forFeature([{ name: SecondKings.name, schema: secondKingsSchema }]),
    MongooseModule.forFeature([{ name: SecondPeter.name, schema: secondPeterSchema }]),
    MongooseModule.forFeature([{ name: SecondSamuel.name, schema: secondSamuelSchema }]),
    MongooseModule.forFeature([{ name: SecondThessalonians.name, schema: secondThessaloniansSchema }]),
    MongooseModule.forFeature([{ name: SecondTimothy.name, schema: secondTimothySchema }]),
    MongooseModule.forFeature([{ name: Solomon.name, schema: solomonSchema }]),
    MongooseModule.forFeature([{ name: ThirdJohn.name, schema: thirdJohnSchema }]),
    MongooseModule.forFeature([{ name: Titus.name, schema: titusSchema }]),
    MongooseModule.forFeature([{ name: Zechariah.name, schema: zechariahSchema }]),
    MongooseModule.forFeature([{ name: Zephaniah.name, schema: zephaniahSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}