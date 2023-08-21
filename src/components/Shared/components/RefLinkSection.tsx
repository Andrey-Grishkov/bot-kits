import { useClipboard } from "../../../hooks/useClipboard";
import { ButtonCopy } from "../../UI/Buttons/Copy/ButtonCopy";
import { IRefLinkSectionProps } from "../types/types";

const RefLinkSection: React.FC<IRefLinkSectionProps> = ({ link }) => {
    const { isCopied, copyToClipboard } = useClipboard(link);
  
    return (
      <div className="partners__ref">
        <div className="partners__ref-container">
          <div className="partners__ref-link">{link}</div>
          <ButtonCopy
            type="default"
            onClick={copyToClipboard}
            role="button"
            aria-label="Скопировать ссылку"
          />
        </div>
        {isCopied && (
          <div className="partners__copied-notice">Ссылка скопирована</div>
        )}
      </div>
    );
  };

  export default RefLinkSection