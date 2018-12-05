import { IUser } from 'modules/auth/types';
import { NameCard } from 'modules/common/components';
import * as React from 'react';
import strip from 'strip';
import * as xss from 'xss';
import {
  LauncherContainer,
  PreviewContent,
  WebPreview,
  WidgetPreview
} from '../styles';

type Props = {
  content?: string;
  user: IUser;
  sentAs?: string;
};

type State = {
  fromUser: string;
};

class MessengerPreview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { fromUser: '' };
  }

  renderNotificationBody = () => {
    const { content, sentAs } = this.props;

    const type = sentAs ? sentAs : 'default';
    const classNames = `engage-message type-${type}`;
    const isFullmessage = sentAs === 'fullMessage';

    if (sentAs === 'badge') {
      return null;
    }

    return (
      <WidgetPreview className={classNames}>
        <NameCard user={this.props.user} singleLine={true} />
        <PreviewContent
          isFullmessage={isFullmessage}
          dangerouslySetInnerHTML={{
            __html: isFullmessage ? xss(content || '') : xss(strip(content))
          }}
        />
      </WidgetPreview>
    );
  };

  render() {
    const { sentAs } = this.props;

    return (
      <WebPreview className={`type-${sentAs}`} isEngage={true}>
        {this.renderNotificationBody()}

        <LauncherContainer>
          <span>1</span>
        </LauncherContainer>
      </WebPreview>
    );
  }
}

export default MessengerPreview;
