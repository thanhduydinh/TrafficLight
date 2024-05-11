import Button from "@/components/ui/Button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/config/utils";

const paginationItemVariants = cva(
  "",
  {
    variants: {
      variant: {
        primary: "px-4 py-2 mx-1 border-d-300",
        ellipsis: "px-4 py-2 mx-1 border-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

const PaginationItem = (props: {
  page?: number;
  onClick: (pageNumber: number) => void;
  content: string;
  isDisabled?: boolean;
  isActive?: boolean | false;
  variant?: VariantProps<typeof paginationItemVariants>["variant"];
  className?: string;
}) => {

  return (
    <li className="inline mx-0 my-4 text-sm">
      <Button
        variant={props.isActive ? "primary" : "outlined"}
        className={cn(paginationItemVariants({ variant: props.variant, className: 'py-3 px-3 h-10' }))}
        onClick={() => props.onClick(props.page || 0)}
        disabled={props.isDisabled}
      >
        {props.content}
      </Button>
    </li>
  );
};

export default PaginationItem;
