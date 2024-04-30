import styles from "./styles.module.css";
import Toggle from "@/components/toggle";
import { useAppSelector, useAppDispatch } from "@/lib/hook.js";
import { changeBill } from "@/lib/features/billing/billingSlice.js";
import { changePlan } from "@/lib/features/planSlice/planSlice.js";
import data from "@/data";
import { addPrefixPlanPrice } from "@/utils.js";
export default function Plan() {
  const billing = useAppSelector((state) => state.billing);
  const planSelected = useAppSelector((state) => state.plan);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    if (billing.billing === "yearly") {
      dispatch(changeBill("monthly"));
      return;
    }
    if (billing.billing === "monthly") {
      dispatch(changeBill("yearly"));
    }
  };
  const handlePlan = (plan) => {
    dispatch(changePlan(plan));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Select your plan</h2>
      <p className={styles.descripcion}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={styles.container_plans}>
        {data.plans.map((plan, index) => {
          return (
            <div
              key={index}
              className={`${styles.plan} ${
                plan === planSelected.plan && styles.selected_plan
              }`}
              onClick={() => handlePlan(plan)}
            >
              <img src={`/images/icon-${plan}.svg`} />
              <div className={styles.plan_content}>
                <h3 className={styles.plan_content_title}>{plan}</h3>
                <p className={styles.plan_content_price}>
                  {" "}
                  {addPrefixPlanPrice(
                    data[billing.billing].plan[plan],
                    billing.billing
                  )}
                </p>
                {billing.billing === "yearly" && (
                  <p className={styles.free}>2 months free</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.container_toggle}>
        <span
          className={`${styles.monthly} ${
            billing.billing === "monthly" && styles.selected
          }`}
        >
          Monthly
        </span>
        <div className={styles.wrapper_toggle}>
          {" "}
          <Toggle toggle={billing.billing} handleToggle={handleToggle} />
        </div>
        <span
          className={`${styles.yearly} ${
            billing.billing === "yearly" && styles.selected
          }`}
        >
          Yearly
        </span>
      </div>
      <div></div>
    </div>
  );
}
