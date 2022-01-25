import React, { useEffect } from "react";
import { useService } from "@xstate/react";

import statue from "../../images/ui/sunflower_statue.png";
import potatoStatue from "../../images/ui/potato_statue.png";
import farmCat from "../../images/ui/farm_cat.png";
import gnome from "../../images/ui/gnome.png";
import dog from "../../images/ui/dog.png";
import scarecrow from "../../images/ui/scarecrow.png";
import christmasTree from "../../images/ui/christmas_tree.png";
import squidGame from "../../images/ui/squid_game.png";
import icon from "../../images/ui/icon.png";
import carry from "../../images/characters/goblin_carry.gif";
import { Inventory } from "../../types/crafting";

import {
  BlockchainEvent,
  BlockchainState,
  Context,
  service,
} from "../../machine";
import Modal from "react-bootstrap/Modal";
import closeIcon from "../../images/ui/close.png";
import { Button } from "../ui/Button";
import { Panel } from "../ui/Panel";

import "./NFTs.css";
import { PRAY_ADDRESS } from "../../Blockchain";

interface Props {
  inventory: Inventory;
}

export const NFTs: React.FC<Props> = ({ inventory }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [sffAmount, setSffAmount] = React.useState(0);
  const [lucky, setLucky] = React.useState(0);
  const [prize, setPrize] = React.useState(0);
  const [isApproving, setIsApproving] = React.useState(false);
  const [isApproved, setIsApproved] = React.useState(false);
  const [error, setError] = React.useState("");
  const [machineState, send] = useService<
    Context,
    BlockchainEvent,
    BlockchainState
  >(service);

  const pray = async () => {
    setError("");

    try {
      await machineState.context.blockChain.prayToPotatoStatue();
      setShowModal(false);
    } catch (e) {
      setError(`Unable to pray`);
    } finally {
      setIsApproved(false);
      const lastPrize = await machineState.context.blockChain.getLastPrize();
      setLucky(0);
      console.log("finish pray: ", lastPrize);
    }
  };

  const approve = async () => {
    setIsApproving(true);
    setError("");

    try {
      await machineState.context.blockChain.approve(
        PRAY_ADDRESS,
        sffAmount * 1.003
      );
      setIsApproved(true);
    } catch (e) {
      setError(`Unable to approve`);
    } finally {
      setIsApproving(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      const prayInfo =
        await machineState.context.blockChain.loadPrayInfo();

      setSffAmount(prayInfo.sff);
      setLucky(prayInfo.lucky);
      setPrize(prayInfo.prize);
    };

    if (machineState.matches("farming")) {
      load();
    }
  }, [machineState]);

  const now = new Date();
  const hasInventoryChristmasTree = inventory["Christmas Tree"] > 0;
  const isProperTimingChristmasTree =
    now.getMonth() === 11 && now.getDate() <= 25;
  const showChristmasTree =
    hasInventoryChristmasTree && isProperTimingChristmasTree;

  return (
    <>
      <div id="statue">
        {inventory["Sunflower Statue"] > 0 && (
          <img src={statue} alt="statue" />
        )}
      </div>

      <div id="potato-statue"  onClick={() => setShowModal(true)}>
        {inventory["OG Potato Statue"] > 0 && (
          <img src={potatoStatue} alt="statue" />
        )}
      </div>

      <div id="scarecrow">
        {inventory["Scarecrow"] > 0 && (
          <img src={scarecrow} alt="statue" />
        )}
      </div>

      <div id="farm-cat">
        {inventory["Farm Cat"] > 0 && <img src={farmCat} alt="farmCat" />}
      </div>

      <div id="farm-dog">
        {inventory["Farm Dog"] > 0 && <img src={dog} alt="dog" />}
      </div>

      <div id="farm-gnome">
        {inventory["Gnome"] > 0 && <img src={gnome} alt="gnome" />}
      </div>

      <div id="christmas-tree">
        {showChristmasTree && (
          <img src={christmasTree} alt="christmasTree" />
        )}
      </div>
      <div className="dirt" style={{ gridColumn: 6, gridRow: 7 }} />
      <div className="dirt" style={{ gridColumn: 6, gridRow: 6 }} />


      {showModal && (
        <Modal
          show={showModal}
          centered
          onHide={() => setShowModal(false)}
          backdrop={false}
          dialogClassName="gather-modal"
        >
          <Panel>
            <div className="gather-panel">
              <img
                src={closeIcon}
                className="gather-close-icon"
                onClick={() => setShowModal(false)}
              />

              <div className="resource-details">
                <span className="resource-title">
                  Pray for Squid Games
                </span>
                <img src={squidGame} className="resource-image" />
                <span
                  className="resource-description"
                  style={{ marginBottom: "1rem" }}
                >
                  Required $SFF: {sffAmount.toFixed(2)}
                </span>
                <span
                  className="resource-description"
                  style={{ marginBottom: "1rem" }}
                >
                  {lucky/500} % Chance to win: {5*prize} $SQUID
                </span>
                <span
                  className="resource-description"
                  style={{ marginBottom: "1rem" }}
                >
                  {lucky/250} % Chance to win: {prize/2} $SQUID
                </span>
                {!isApproved && (
                  <div>
                    <span className="community-guide-text">
                      Step 1 - Approve $SFF
                    </span>
                    {!isApproving && <Button onClick={approve}>Approve</Button>}
                    {isApproving && (
                      <>
                        <div id="approving-animation">
                          <img id="approving-goblin" src={carry} />
                          <img id="approving-sff" src={icon} />
                        </div>
                        <span className="community-guide-text">Approving...</span>
                      </>
                    )}
                  </div>
                )}

                {isApproved && (
                  <div>
                    <span className="community-guide-text">Step 2 - Offer $SFF and Pray</span>
                    <Button onClick={pray}>Pray</Button>
                  </div>
                )}
                <a
                  href="https://docs.sunflower-farmers.com/resources"
                  target="_blank"
                >
                  <h3 className="current-price-supply-demand">
                    Read more
                  </h3>
                </a>
              </div>
            </div>
          </Panel>
        </Modal>
      )}
    </>
  );
};
