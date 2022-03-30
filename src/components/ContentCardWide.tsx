import ThumbsUp from '@svg/thumbs-up.svg';
import ThumbsDown from '@svg/thumbs-down.svg';
import AcceptCircle from '@svg/accept-circle.svg';
import CancelCircle from '@svg/cancel-circle.svg';
import ContentWithTags from '@lib/interfaces/content';

const ContentCardWide: React.FC<ContentWithTags> = ({ type, duration, title, description, tags }) => (
  <div className="flex flex-col justify-start items-start h-[260px] overflow-hidden gap-[18px] px-4 py-[18px] rounded-[10px] bg-white border border-[#e1e1e1]">
    <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[557px]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[23px]">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[15px]">
          <ThumbsUp />
          <ThumbsDown />
        </div>
        <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#616161]">{type}</p>
        <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#616161]">{duration}</p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
          <AcceptCircle />
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#a0a0a0]">Done</p>
        </div>
        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[5px]">
          <CancelCircle />
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#a0a0a0]">Hide</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[136px] relative gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[557px] text-[22px] font-semibold text-left text-neutral-800">{title}</p>
      <p className="flex-grow-0 flex-shrink-0 w-[557px] h-10 opacity-70 text-sm text-left text-neutral-800">{description}</p>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[550px] gap-[254px]">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[9px]">
        {tags.map(({ id, name }) => (
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-[15px] py-[5px] rounded-[50px] bg-[#f4f4f4]" key={id}>
            <p className="flex-grow-0 flex-shrink-0 text-[13px] font-semibold text-left text-[#4e4e4e]">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ContentCardWide;
