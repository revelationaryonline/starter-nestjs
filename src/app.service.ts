import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// Import all schemas for the books
import { Acts, ActsDocument } from './schema/acts.schema';
import { Amos, AmosDocument } from './schema/amos.schema';
import { Colossians, ColossiansDocument } from './schema/colossians.schema';
import { Daniel, DanielDocument } from './schema/daniel.schema';
import { Deuteronomy, DeuteronomyDocument } from './schema/deuteronomy.schema';
import { Ecclesiastes, EcclesiastesDocument } from './schema/ecclesiastes.schema';
import { Ephesians, EphesiansDocument } from './schema/ephesians.schema';
import { Esther, EstherDocument } from './schema/esther.schema';
import { Exodus, ExodusDocument } from './schema/exodus.schema';
import { Ezekiel, EzekielDocument } from './schema/ezekiel.schema';
import { Ezra, EzraDocument } from './schema/ezra.schema';
import { FirstChronicles, FirstChroniclesDocument } from './schema/firstChronicles.schema';
import { FirstCorinthians, FirstCorinthiansDocument } from './schema/firstCorinthians.schema';
import { FirstJohn, FirstJohnDocument } from './schema/firstJohn.schema';
import { FirstKings, FirstKingsDocument } from './schema/firstKings.schema';
import { FirstPeter, FirstPeterDocument } from './schema/firstPeter.schema';
import { FirstSamuel, FirstSamuelDocument } from './schema/firstSamuel.schema';
import { FirstThessalonians, FirstThessaloniansDocument } from './schema/firstThessalonians.schema';
import { FirstTimothy, FirstTimothyDocument } from './schema/firstTimothy.schema';
import { Galatians, GalatiansDocument } from './schema/galatians.schema';
import { Genesis, GenesisDocument } from './schema/genesis.schema';
import { Habakkuk, HabakkukDocument } from './schema/habakkuk.schema';
import { Haggai, HaggaiDocument } from './schema/haggai.schema';
import { Hebrews, HebrewsDocument } from './schema/hebrews.schema';
import { Hosea, HoseaDocument } from './schema/hosea.schema';
import { Isaiah, IsaiahDocument } from './schema/isaiah.schema';
import { James, JamesDocument } from './schema/james.schema';
import { Jeremiah, JeremiahDocument } from './schema/jeremiah.schema';
import { Job, JobDocument } from './schema/job.schema';
import { Joel, JoelDocument } from './schema/joel.schema';
import { John, JohnDocument } from './schema/john.schema';
import { Jonah, JonahDocument } from './schema/jonah.schema';
import { Joshua, JoshuaDocument } from './schema/joshua.schema';
import { Jude, JudeDocument } from './schema/jude.schema';
import { Judges, JudgesDocument } from './schema/judges.schema';
import { Lamentations, LamentationsDocument } from './schema/lamentations.schema';
import { Leviticus, LeviticusDocument } from './schema/leviticus.schema';
import { Luke, LukeDocument } from './schema/luke.schema';
import { Malachi, MalachiDocument } from './schema/malachi.schema';
import { Mark, MarkDocument } from './schema/mark.schema';
import { Matthew, MatthewDocument } from './schema/matthew.schema';
import { Micah, MicahDocument } from './schema/micah.schema';
import { Nahum, NahumDocument } from './schema/nahum.schema';
import { Nehemiah, NehemiahDocument } from './schema/nehemiah.schema';
import { Numbers, NumbersDocument } from './schema/numbers.schema';
import { Obadiah, ObadiahDocument } from './schema/obadiah.schema';
import { Philemon, PhilemonDocument } from './schema/philemon.schema';
import { Philippians, PhilippiansDocument } from './schema/philippians.schema';
import { Proverbs, ProverbsDocument } from './schema/proverbs.schema';
import { Psalms, PsalmsDocument } from './schema/psalms.schema';
import { Revelation, RevelationDocument } from './schema/revelation.schema';
import { Romans, RomansDocument } from './schema/romans.schema';
import { Ruth, RuthDocument } from './schema/ruth.schema';
import { SecondChronicles, SecondChroniclesDocument } from './schema/secondChronicles.schema';
import { SecondCorinthians, SecondCorinthiansDocument } from './schema/secondCorinthians.schema';
import { SecondJohn, SecondJohnDocument } from './schema/secondJohn.schema';
import { SecondKings, SecondKingsDocument } from './schema/secondKings.schema';
import { SecondPeter, SecondPeterDocument } from './schema/secondPeter.schema';
import { SecondSamuel, SecondSamuelDocument } from './schema/secondSamuel.schema';
import { SecondThessalonians, SecondThessaloniansDocument } from './schema/secondThessalonians.schema';
import { SecondTimothy, SecondTimothyDocument } from './schema/secondTimothy.schema';
import { Solomon, SolomonDocument } from './schema/solomon.schema';
import { ThirdJohn, ThirdJohnDocument } from './schema/thirdJohn.schema';
import { Titus, TitusDocument } from './schema/titus.schema';
import { Zechariah, ZechariahDocument } from './schema/zechariah.schema';
import { Zephaniah, ZephaniahDocument } from './schema/zephaniah.schema';

@Injectable()
export class AppService {
  private bookModels: Record<string, Model<any>>;

  constructor(
    @InjectModel(Acts.name) private actsModel: Model<ActsDocument>,
    @InjectModel(Amos.name) private amosModel: Model<AmosDocument>,
    @InjectModel(Colossians.name) private colossiansModel: Model<ColossiansDocument>,
    @InjectModel(Daniel.name) private danielModel: Model<DanielDocument>,
    @InjectModel(Deuteronomy.name) private deuteronomyModel: Model<DeuteronomyDocument>,
    @InjectModel(Ecclesiastes.name) private ecclesiastesModel: Model<EcclesiastesDocument>,
    @InjectModel(Ephesians.name) private ephesiansModel: Model<EphesiansDocument>,
    @InjectModel(Esther.name) private estherModel: Model<EstherDocument>,
    @InjectModel(Exodus.name) private exodusModel: Model<ExodusDocument>,
    @InjectModel(Ezekiel.name) private ezekielModel: Model<EzekielDocument>,
    @InjectModel(Ezra.name) private ezraModel: Model<EzraDocument>,
    @InjectModel(FirstChronicles.name) private firstChroniclesModel: Model<FirstChroniclesDocument>,
    @InjectModel(FirstCorinthians.name) private firstCorinthiansModel: Model<FirstCorinthiansDocument>,
    @InjectModel(FirstJohn.name) private firstJohnModel: Model<FirstJohnDocument>,
    @InjectModel(FirstKings.name) private firstKingsModel: Model<FirstKingsDocument>,
    @InjectModel(FirstPeter.name) private firstPeterModel: Model<FirstPeterDocument>,
    @InjectModel(FirstSamuel.name) private firstSamuelModel: Model<FirstSamuelDocument>,
    @InjectModel(FirstThessalonians.name) private firstThessaloniansModel: Model<FirstThessaloniansDocument>,
    @InjectModel(FirstTimothy.name) private firstTimothyModel: Model<FirstTimothyDocument>,
    @InjectModel(Galatians.name) private galatiansModel: Model<GalatiansDocument>,
    @InjectModel(Genesis.name) private genesisModel: Model<GenesisDocument>,
    @InjectModel(Habakkuk.name) private habakkukModel: Model<HabakkukDocument>,
    @InjectModel(Haggai.name) private haggaiModel: Model<HaggaiDocument>,
    @InjectModel(Hebrews.name) private hebrewsModel: Model<HebrewsDocument>,
    @InjectModel(Hosea.name) private hoseaModel: Model<HoseaDocument>,
    @InjectModel(Isaiah.name) private isaiahModel: Model<IsaiahDocument>,
    @InjectModel(James.name) private jamesModel: Model<JamesDocument>,
    @InjectModel(Jeremiah.name) private jeremiahModel: Model<JeremiahDocument>,
    @InjectModel(Job.name) private jobModel: Model<JobDocument>,
    @InjectModel(Joel.name) private joelModel: Model<JoelDocument>,
    @InjectModel(John.name) private johnModel: Model<JohnDocument>,
    @InjectModel(Jonah.name) private jonahModel: Model<JonahDocument>,
    @InjectModel(Joshua.name) private joshuaModel: Model<JoshuaDocument>,
    @InjectModel(Jude.name) private judeModel: Model<JudeDocument>,
    @InjectModel(Judges.name) private judgesModel: Model<JudgesDocument>,
    @InjectModel(Lamentations.name) private lamentationsModel: Model<LamentationsDocument>,
    @InjectModel(Leviticus.name) private leviticusModel: Model<LeviticusDocument>,
    @InjectModel(Luke.name) private lukeModel: Model<LukeDocument>,
    @InjectModel(Malachi.name) private malachiModel: Model<MalachiDocument>,
    @InjectModel(Mark.name) private markModel: Model<MarkDocument>,
    @InjectModel(Matthew.name) private matthewModel: Model<MatthewDocument>,
    @InjectModel(Micah.name) private micahModel: Model<MicahDocument>,
    @InjectModel(Nahum.name) private nahumModel: Model<NahumDocument>,
    @InjectModel(Nehemiah.name) private nehemiahModel: Model<NehemiahDocument>,
    @InjectModel(Numbers.name) private numbersModel: Model<NumbersDocument>,
    @InjectModel(Obadiah.name) private obadiahModel: Model<ObadiahDocument>,
    @InjectModel(Philemon.name) private philemonModel: Model<PhilemonDocument>,
    @InjectModel(Philippians.name) private philippiansModel: Model<PhilippiansDocument>,
    @InjectModel(Proverbs.name) private proverbsModel: Model<ProverbsDocument>,
    @InjectModel(Psalms.name) private psalmsModel: Model<PsalmsDocument>,
    @InjectModel(Revelation.name) private revelationModel: Model<RevelationDocument>,
    @InjectModel(Romans.name) private romansModel: Model<RomansDocument>,
    @InjectModel(Ruth.name) private ruthModel: Model<RuthDocument>,
    @InjectModel(SecondChronicles.name) private secondChroniclesModel: Model<SecondChroniclesDocument>,
    @InjectModel(SecondCorinthians.name) private secondCorinthiansModel: Model<SecondCorinthiansDocument>,
    @InjectModel(SecondJohn.name) private secondJohnModel: Model<SecondJohnDocument>,
    @InjectModel(SecondKings.name) private secondKingsModel: Model<SecondKingsDocument>,
    @InjectModel(SecondPeter.name) private secondPeterModel: Model<SecondPeterDocument>,
    @InjectModel(SecondSamuel.name) private secondSamuelModel: Model<SecondSamuelDocument>,
    @InjectModel(SecondThessalonians.name) private secondThessaloniansModel: Model<SecondThessaloniansDocument>,
    @InjectModel(SecondTimothy.name) private secondTimothyModel: Model<SecondTimothyDocument>,
    @InjectModel(Solomon.name) private solomonModel: Model<SolomonDocument>,
    @InjectModel(ThirdJohn.name) private thirdJohnModel: Model<ThirdJohnDocument>,
    @InjectModel(Titus.name) private titusModel: Model<TitusDocument>,
    @InjectModel(Zechariah.name) private zechariahModel: Model<ZechariahDocument>,
    @InjectModel(Zephaniah.name) private zephaniahModel: Model<ZephaniahDocument>,
  ) {
    // Initialize the bookModels mapping
    this.bookModels = {
      acts: this.actsModel,
      amos: this.amosModel,
      colossians: this.colossiansModel,
      daniel: this.danielModel,
      deuteronomy: this.deuteronomyModel,
      ecclesiastes: this.ecclesiastesModel,
      ephesians: this.ephesiansModel,
      esther: this.estherModel,
      exodus: this.exodusModel,
      ezekiel: this.ezekielModel,
      ezra: this.ezraModel,
      firstchronicles: this.firstChroniclesModel,
      firstcorinthians: this.firstCorinthiansModel,
      firstjohn: this.firstJohnModel,
      firstkings: this.firstKingsModel,
      firstpeter: this.firstPeterModel,
      firstsamuel: this.firstSamuelModel,
      firstthessalonians: this.firstThessaloniansModel,
      firsttimothy: this.firstTimothyModel,
      galatians: this.galatiansModel,
      genesis: this.genesisModel,
      habakkuk: this.habakkukModel,
      haggai: this.haggaiModel,
      hebrews: this.hebrewsModel,
      hosea: this.hoseaModel,
      isaiah: this.isaiahModel,
      james: this.jamesModel,
      jeremiah: this.jeremiahModel,
      job: this.jobModel,
      joel: this.joelModel,
      john: this.johnModel,
      jonah: this.jonahModel,
      joshua: this.joshuaModel,
      jude: this.judeModel,
      judges: this.judgesModel,
      lamentations: this.lamentationsModel,
      leviticus: this.leviticusModel,
      luke: this.lukeModel,
      malachi: this.malachiModel,
      mark: this.markModel,
      matthew: this.matthewModel,
      micah: this.micahModel,
      nahum: this.nahumModel,
      nehemiah: this.nehemiahModel,
      numbers: this.numbersModel,
      obadiah: this.obadiahModel,
      philemon: this.philemonModel,
      philippians: this.philippiansModel,
      proverbs: this.proverbsModel,
      psalms: this.psalmsModel,
      revelation: this.revelationModel,
      romans: this.romansModel,
      ruth: this.ruthModel,
      secondchronicles: this.secondChroniclesModel,
      secondcorinthians: this.secondCorinthiansModel,
      secondjohn: this.secondJohnModel,
      secondkings: this.secondKingsModel,
      secondpeter: this.secondPeterModel,
      secondsamuel: this.secondSamuelModel,
      secondthessalonians: this.secondThessaloniansModel,
      secondtimothy: this.secondTimothyModel,
      solomon: this.solomonModel,
      thirdjohn: this.thirdJohnModel,
      titus: this.titusModel,
      zechariah: this.zechariahModel,
      zephaniah: this.zephaniahModel,
    };
  }

  private getBookModel(book: string): Model<any> | null {
    return this.bookModels[book.toLowerCase()] || null;
  }

  async getHealth(book: string): Promise<{}> {
    const model = await this.getBookModel(book);
    if (!model) {
      throw new Error('Book not found');
    }
    try {
      const result = await model.find();
      return result ? { health: 'ok', result } : { health: 'no book found' };
    } catch (error) {
      console.error('Error in getHealth:', error); // Log the error
      throw new Error(error);
    }
  }

  async getChaptersCount(book: string): Promise<{}> {
    const model = this.getBookModel(book);
    if (!model) {
      throw new Error('Book not found');
    }
    try {
      const chapters = await model.distinct('chapter');
      return { count: chapters.length };
    } catch (error) {
      throw new Error('Error fetching chapter count');
    }
  }

  async searchVerseAcrossBooks(text: string): Promise<any[]> {
    const searchPromises = Object.keys(this.bookModels).map((book) => {
      const model = this.getBookModel(book);
      return model.find({ $text: { $search: text } })
        .select('text book chapter verse')
        .exec();
    });

    // Execute all promises and merge results
    const results = await Promise.all(searchPromises);
    return results.flat(); // Merge all results into a single array
  }
}