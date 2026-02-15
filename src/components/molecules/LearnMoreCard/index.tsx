import * as S from './styles';
interface LearnMoreCardProps {
  title: string;
  description: string;
  icon: string;
}

export const LearnMoreCard = ({
  icon,
  title,
  description,
}: LearnMoreCardProps) => {
  return (
    <S.CardContainer>
      <S.ServiceIcon loading="lazy" src={icon} alt="" />
      <S.ServiceTitle>{title}</S.ServiceTitle>
      <S.ServiceDescription>{description}</S.ServiceDescription>
      {/* <S.LearnMoreButton>
        <span>Learn More</span>
        <S.ArrowIcon loading="lazy" src={ArrowIcon} alt="" />
      </S.LearnMoreButton> */}
    </S.CardContainer>
  );
};

export default LearnMoreCard;
